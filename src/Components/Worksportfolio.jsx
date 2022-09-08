import React from "react";
import Worksportfoliochild from "./Worksportfoliochild";
import p1 from "./images/images/astronaut.jpg";
import p2 from "./images/images/watermelon.jpg";
import p3 from "./images/images/monkey.jpg";
import p4 from "./images/images/alien.jpg";
import p5 from "./images/images/lion.jpg";
import p6 from "./images/images/doggy.jpg";
import p7 from "./images/images/robot.jpg";
import p8 from "./images/images/watermelon.jpg";
import p9 from "./images/images/boy.jpg";

export default function Worksportfolio() {
  return (
    <div>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 mt-16 lg:mx-20 md:mx-10 mx-3  ">
        <div>
          <Worksportfoliochild
            data={{ image: p1, title1: "UI/UX", title2: "Chul Urina" }}
          />
          <Worksportfoliochild
            data={{ image: p4, title1: "Video", title2: "Chul Urina" }}
          />
          <Worksportfoliochild
            data={{ image: p7, title1: "UI/UX", title2: "Chul Urina" }}
          />
        </div>

        <div>
          <Worksportfoliochild
            data={{ image: p2, title1: "Web Design", title2: "Aura Dione" }}
          />
          <Worksportfoliochild
            data={{ image: p5, title1: "UI/UX", title2: "Chul Urina" }}
          />
          <Worksportfoliochild
            data={{ image: p8, title1: "Web Design", title2: "Chul Urina" }}
          />
        </div>
        <div>
          <Worksportfoliochild
            data={{ image: p3, title1: "Logo", title2: "Chul Urina" }}
          />
          <Worksportfoliochild
            data={{ image: p6, title1: "Video", title2: "Chul Urina" }}
          />
          <Worksportfoliochild
            data={{ image: p9, title1: "Logo", title2: "Chul Urina" }}
          />
        </div>
      </div>
    </div>
  );
}