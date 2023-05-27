import React from 'react'
import Detail from './Detail'
import Meals from './Meals'
import {Routes, Route} from 'react-router-dom'
import './index.css'
import Nav from './component/Nav'
import Filter from './FilterPage'
import FilterPage from './FilterPage'


const App = () => {
  return (
     <div className="container-fluid  mx-auto">
        <Nav />
        <Routes>
          <Route path='/' element={<Meals/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/filter/:name' element={<FilterPage />} />
        </Routes>
    </div>     
  )
}

export default App