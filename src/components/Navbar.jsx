import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import {ReactSession} from 'react-client-session';





function Navbar(){

    const isUserPresesnt = ReactSession.get('User');

    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-secondary mb-5">
                
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">AQINO</NavLink>
        
                        <div className="d-flex justify-content-end">
                        
                          
                            <div className="" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Acceuil</NavLink>
                                    </li>
                                    {
                                        isUserPresesnt ? 
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/user/">{"Espace Utilisateur \:"} {isUserPresesnt.username} </NavLink>
                                            </li>
                                            :
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/auth/singin">Se connecter</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/auth/singup">S'enregister</NavLink>
                                            </li>
                                        </>
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
  
    )
}



export default Navbar;