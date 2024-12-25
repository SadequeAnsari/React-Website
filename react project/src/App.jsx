import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from "./Components/Contact"
import Footer from './Components/Footer'
// import Login from './Components/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/service'element={<Service/>} />
      <Route path='/contact'element={<Contact />} />
    </Routes>
    {/* <Login/> */}
    </BrowserRouter>
    <Footer/>
        {/* <Navbar/>
        <Home/>
        <Service/>
        <About/> */}

    </>
  )
}

export default App