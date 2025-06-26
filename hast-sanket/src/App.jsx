import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import './App.css'
import HeroSection from './HeroSection.jsx'
import Problem from './Problem.jsx'
import HowItWorks from './HowItWorks.jsx'
import Solution from './Solution.jsx'
import Demo from './Demo.jsx'
import Team from './Team.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/> 
        <Problem/>  
        <Solution/>
        <HowItWorks/>
        <Demo/> 
        <Team/> 
         </div>
      
    </>
  )
}

export default App
