import React from 'react';
import logo from '../logo.svg';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo__item">
                    <img src={logo} alt=""></img>
                    <h1 className="navbar__title">Meme Generator</h1>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
