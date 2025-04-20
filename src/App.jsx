// import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import MyWork from './components/MyWork/MyWork'
import Portfolio from './components/Portfolio/Services'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <MyWork />
        <Portfolio />
      </div>
    </>
  )
}

export default App
