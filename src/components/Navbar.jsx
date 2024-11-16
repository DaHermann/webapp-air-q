import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';





function Navbar(){



    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
                
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" href="/">AQINO</NavLink>
        
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
                                        <NavLink className="nav-link" to="/auth/singin">Se connecter</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/auth/singup">S'enregister</NavLink>
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



export default Navbar;