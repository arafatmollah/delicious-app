import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Category from './components/Category'
import Pages from './Pages/Pages'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Category></Category>
      <Pages></Pages>
      </BrowserRouter>
    </div>
  )
}

export default App