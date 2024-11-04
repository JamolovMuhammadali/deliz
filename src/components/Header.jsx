import React, { useState } from 'react';
import '../components/Header.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Hook to get the current route
    const cartItems = 3;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header'>
            <Link to='/' className="header-logo">
                <div className="header-logo-circle">
                    <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
            </Link>

            <div className={`header-links ${menuOpen ? 'show' : ''}`}>
                <Link 
                    to='/' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/' ? 'active-link' : ''}
                >
                    Home
                </Link>
                <Link 
                    to='/About' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/About' ? 'active-link' : ''}
                >
                    About us
                </Link>
                <Link 
                    to='/OrderOnline' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/OrderOnline' ? 'active-link' : ''}
                >
                    Order online
                </Link>
                <Link 
                    to='/Reservation' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Reservation' ? 'active-link' : ''}
                >
                    Reservation
                </Link>
                <Link 
                    to='/Contact' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Contact' ? 'active-link' : ''}
                >
                    Contact us
                </Link>
                <Link 
                    to='/checkout' 
                    onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/checkout' ? 'active-link' : ''}
                >
                    Checkout
                </Link>
            </div>

            <div className="header-counter-button">
                <Link to='/Cart' onClick={() => setMenuOpen(false)}>
                    <div className="header-counter">
                        <MdOutlineShoppingCart />
                        <div className="header-counter-num">
                            <sup>{cartItems}</sup>
                        </div>
                    </div>
                </Link>

                <Link to='/Login'>
                    <button>Login</button>
                </Link>

                <div 
                    className={`header-counter-button-rectangles ${menuOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}
                >
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-circle"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
