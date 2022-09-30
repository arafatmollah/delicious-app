import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cusine from './Cusine'
import Home from './Home'

function Pages() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cusine/:cusine' element={<Cusine></Cusine>}></Route>
      </Routes>
        
    </div>
  )
}

export default Pages