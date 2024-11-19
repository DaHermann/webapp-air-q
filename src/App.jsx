import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NavbarUser from './components/NavbarUser';
import Singin from './pages/Singin';
import Singup from './pages/Singup';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HomeUser from './pages/HomeUser'
import { ReactSession } from 'react-client-session';
import LogoutUser from './pages/LogoutUser';


/**
 * Composants d'application
 * @returns 
 */

function App() {
  ReactSession.setStoreType("localStorage");


  return (
    <>
      <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true,}}>
        <Routes>
          {/* Route de la page d'acceuil */}
          <Route path="/" element={<Navbar/>}>
            <Route  index element={<Home/>}   />
          </Route>
          {/* Route des pages d'authentification */}
          <Route path="/auth" >
            <Route path='singin' element={<Singin/>}   />
            <Route path='singup' element={<Singup/>}  />
          </Route>

          {/* Route des pages utilisateur */}
          <Route path="/user/" element={<NavbarUser/>}>
            <Route  index element={<HomeUser/>} />
            <Route path="logout" element={<LogoutUser/>}></Route>
          </Route>
          {/* Route 404*/}
          <Route path='*' element={<NotFound/>}   />
        </Routes>
      </BrowserRouter>
    </>
  )
}




export default App
