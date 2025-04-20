// // import { useState } from 'react'
// import './App.css'
// import About from './components/About/About'
// import Home from './components/Home/Home'
// import Navbar from './components/Navbar/Navbar'
// import MyWork from './components/MyWork/MyWork'
// import Portfolio from './components/Portfolio/Services'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// // import { BrowserRouter } from "react-router-dom";

// function App() {

//   return (
//     <>
//       <div>
//         <Navbar />
//         <Home />
//         <About />
//         <MyWork />
//         <Portfolio />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App



import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import MyWork from './components/MyWork/MyWork'
import Portfolio from './components/Portfolio/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'
import TermsOfService from './components/Legal/TermsOfService'
import PrivacyPolicy from './components/Legal/PrivacyPolicy'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <MyWork />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default App
