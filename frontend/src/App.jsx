import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashbord from './pages/AdminPages/Dashbord'
import AddProduct from './pages/AdminPages/AddProduct'
import ProductDetails from './pages/AdminPages/ProductDetails'
import Products from './pages/AdminPages/Products'
import EditProduct from './pages/AdminPages/EditProduct'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path='/dashboard'element={<Dashbord/>} /> 
        <Route path='/products'element={<Products/>} /> 

        <Route path='/addProduct'element={<AddProduct/>} />
        <Route path='/ProductDetails/:id'element={<ProductDetails/>} />
        <Route path='/EditProduct/:id'element={<EditProduct/>} />

      </Routes>
    </>
  )
}

export default App
