import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from './Component/Main'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Navbar from './Component/Navbar'
import Foter from './Component/Foter'
import ProductDetail from './Component/ProductDetail'
import Spacel from './Pages/Spacel'
import Chekout from './Pages/Chekout'

const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
 <Route path='/' element={<Main/>} />
 <Route path='/spacel' element={<Spacel/>}/>
 <Route path="/cart" element={<Cart/>} />
 <Route path="/login" element={<Login/>}/>
 <Route path="/checkout" element={<Chekout/>}/>
 <Route path="/product/:id" element={<ProductDetail />} />
</Routes>
    </div>
  )
}

export default App