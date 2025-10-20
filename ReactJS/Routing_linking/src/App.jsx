import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import { Routes, Route ,Link} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Link className='link' to='/'>Home &nbsp;</Link>
      <Link className='link' to='/gallery'>Gallery &nbsp;</Link>
      <Link className='link' to='/about'>About &nbsp;</Link>
    </>
  )
}

export default App
