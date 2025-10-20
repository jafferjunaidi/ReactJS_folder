import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav>
    <Link to='/' style={{marginLeft:'30px', textDecoration:'none', color:'black'}}>Home</Link>
    <Link to='/about' style={{marginLeft:'30px',textDecoration:'none', color:'black'}}>About</Link>
    <Link to='/products' style={{marginLeft:'30px', textDecoration:'none', color:'black'}}>Products</Link>
    <Link to='/gallery' style={{marginLeft:'30px', textDecoration:'none', color:'black'}}>Gallery</Link>
 </nav>
   </>
  )
}

export default Navbar