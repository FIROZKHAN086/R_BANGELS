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
import About from './Page/About'
import Privacy from './Page/Privacy'
import Terms from './Page/Terms'
import Contact from './Page/Contact'

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
 <Route path="/privacy" element={<Privacy/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/terms" element={<Terms/>}/>
 <Route path="/contact" element={<Contact/>}/>
</Routes>
<Foter/>
    </div>
  )
}

export default App