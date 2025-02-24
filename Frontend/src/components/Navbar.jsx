import React from 'react'
import './Navbar.css'
import { formatNumber } from '../assets/utils/formatNumber'

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className="navbar-container">
            <p>Pizzería Mamma Mía!</p>
            <div className="buttons-container">
                <button type="button" className="btn"><i className="fas fa-pizza-slice"></i>Home</button>
                {token ? (
                    <>
                        <button type="button" className="btn"><i className="fas fa-lock-open"></i>Profile</button>
                        <button type="button" className="btn"><i className="fas fa-lock"></i>Logout</button>
                    </>
                ) : (
                    <>
                        <button type="button" className="btn"><i className="fas fa-lock"></i><i className="fas fa-key"></i>Login</button>
                        <button type="button" className="btn"><i className="fas fa-lock"></i><i className="fas fa-key"></i>Register</button>
                    </>
                )}
                <button type="button" className="btn total-btn"><i className="fas fa-shopping-cart"></i>Total: ${formatNumber(total)}</button>
            </div>
        </div>
    )
}

export default Navbar