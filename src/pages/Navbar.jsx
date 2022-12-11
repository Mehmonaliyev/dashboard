import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid flex-column float-l">
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav flex-column float-l flex-start">
                            <li className="nav-item">
                                <NavLink to={'/'}>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                  <NavLink to={'/sale'}>
                                    Sales
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                  <NavLink to={'/products'}>
                                  Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'/create'}>
                                    Create Product 
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
