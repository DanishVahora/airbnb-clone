import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import IndexPages from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route  index element={<IndexPages/>}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>}></Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
