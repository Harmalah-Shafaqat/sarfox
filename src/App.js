import React from 'react'
import Navbar from './Components/Navbar'
import Cv from './Components/Cv';
import About from './Components/About';
import Blog from './Components/Blog';
import Resume from './Components/Resume';
import Works from './Components/Works';
import Contact from './Components/Contact'
import {Route,Routes} from "react-router-dom"



function App() {
  return (
    <div>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Cv/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Aboutt" element={<About/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Works" element={<Works/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      
    </Routes>


    </div>
  )
}
export default App;
