import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import {ReactSession} from 'react-client-session';




function NavbarUser(){

    const user = ReactSession.get("User")

    if(!user){
        window.location = '/auth/singin';
    }


    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-secondary mb-5">
                
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">AQINO</NavLink>
        
                        <div className="d-flex justify-content-end">
                        
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Acceuil</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {
                                            user?
                                            <NavLink className="nav-link" to="/user/logout">Se deconnecter</NavLink>
                                            :""

                                        }
                                        
                                    </li>
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



export default NavbarUser;