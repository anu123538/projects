import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    
    <div className='app'>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
     </Routes>
      
    </div>
    <Footer/>
    </>
    
  )
}

export default App

