import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from './Component/Main'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Navbar from './Component/Navbar'
import Foter from './Component/Foter'
import ProductDetail from './Component/ProductDetail'

const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
 <Route path='/' element={<Main/>} />
 <Route path="/cart" element={<Cart/>} />
 <Route path="/login" element={<Login/>}/>
 <Route path="/product/:id" element={<ProductDetail />} />
</Routes>
    <Foter/>
    </div>
  )
}

export default App