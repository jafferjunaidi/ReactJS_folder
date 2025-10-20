import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <h1>Products</h1>
    <Link to='clothes'>Clothes</Link> &nbsp;&nbsp;&nbsp;
    <Link to='shoes'>Shoes</Link> &nbsp;&nbsp;&nbsp;
    <Link to='watches'>Watches</Link> &nbsp;&nbsp;&nbsp;
    <Link to='perfumes'>Perfumes</Link> &nbsp;&nbsp;&nbsp;
    <Link to='wallets'>Wallets</Link> &nbsp;&nbsp;&nbsp;
    <Outlet/>
    </>
  )
}

export default Products