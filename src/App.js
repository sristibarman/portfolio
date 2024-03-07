import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills />
      <Project/>
      <Contact/>
      
     </div>
    
  )
}

export default App