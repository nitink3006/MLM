import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App