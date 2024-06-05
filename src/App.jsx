import { useState } from 'react'

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import BannerProduct from './components/BannerProduct.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
   
     <Routes>
     <Route path="/" element={<Home/>}/>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
     </Routes>
   
     </BrowserRouter>
    </>
  )
}

export default App
