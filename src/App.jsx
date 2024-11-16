import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Singin from './pages/Singin';
import Singup from './pages/Singup';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HomeUser from './pages/HomeUser'


function App() {


  return (
    <>
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true,}}>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route  index element={<Home/>}   />
          {/* <Route path='*' element={<NotFound/>}   /> */}
        </Route>

        <Route path="/auth" >
          <Route path='singin' element={<Singin/>}   />
          <Route path='singup' element={<Singup/>}  />
          {/* <Route path='*' element={<NotFound/>}   /> */}
        </Route>

        <Route path="/user/" element={<Navbar/>}>
          <Route  index element={<HomeUser/>}   />
          {/* <Route path='*' element={<NotFound/>}   /> */}
        </Route>
    
      </Routes>
    </BrowserRouter>

    </>
  )
}




export default App
