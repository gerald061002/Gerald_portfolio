import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="main-cont">
        <div className="header">
          <button>About Me</button>
          <button>Contacts</button>
          <button>Home</button>
          <button>Projects</button>
          <button>Resume</button>
        </div>

        <div className="hero">
          <h1>Hi, I'm Bubog 😁</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
    </>
  )
}

export default App
