import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from './Component/Main'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Navbar from './Component/Navbar'
import Foter from './Component/Foter'

const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
 <Route path='/' element={<Main/>} />
 <Route path="/cart" element={<Cart/>} />
 <Route path="/login" element={<Login/>}/>
</Routes>
<Foter/>
    </div>
  )
}

export default App