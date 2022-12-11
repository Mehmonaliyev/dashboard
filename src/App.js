import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CeratProduct from './pages/admin/CeratProduct'
import Products from './pages/admin/Products'
import Sale from './pages/admin/Sale'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar'

function App() {
  return (
    <>

      <div className='row'>
        <div className='col-lg-2'>
          <div>
            <h3 className='p-2'>
              Logo
            </h3>
          </div>
          <Navbar />
        </div>
        <div className='col-lg-10'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-end w-100 bg-secondary'>
              <input className='form-control w-25 m-2 p-1' placeholder='Search...'  />
              <button className='btn btn-dark m-2 p-1'>Search</button>
            </div>
            <div className='col-12'>
              <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/sale' element={<Sale/>} />
                <Route path='/create' element={<CeratProduct/>} />
                <Route path='/products' element={<Products/>} />
              </Routes>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
