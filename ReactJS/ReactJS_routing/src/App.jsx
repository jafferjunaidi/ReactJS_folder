import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import { Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' Component={Products}/>
    <Route path='/gallery' Component={Gallery}/>
  </Routes>
    </>
  )
}

export default App