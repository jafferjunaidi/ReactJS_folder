import React from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Clothes from './Clothes'
import Shoes from './Shoes'
import Watches from './Watches'
import Perfumes from './Perfumes'
import Wallets from './Wallets'

const App = () => {
  return (
    <>

    <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;
    <Link to='/about'>About</Link> &nbsp;&nbsp;&nbsp;
    <Link to='/contact'>Contact</Link> &nbsp;&nbsp;&nbsp;
    <Link to='/products'>Products</Link> &nbsp;&nbsp;&nbsp;
    



     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} />

            {/* Nesting Routing */}
      <Route path="/products" element={<Products />}>

      {/* <Route index Component={Clothes}/> */}
      <Route index element={<Clothes/>}/>
       <Route path='/products/clothes' element={<Clothes/>}/>
       <Route path='/products/shoes' element={<Shoes/>}/>
       <Route path='/products/watches' element={<Watches/>}/>
       <Route path='/productsperfumes' element={<Perfumes/>}/>
       <Route path='/products/wallets' element={<Wallets/>}/>
      </Route> 

     </Routes>
    </>
  )
}

export default App