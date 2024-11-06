import React, { useState } from 'react';
import '../components/Header.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Header({cartItems}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Hook to get the current route
    const cartItemsnum = 3;

    const toggleOpen = () => {
        setMenuOpen(true)
    }


    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // console.log(cartItems);
    // console.log(cartItems.length);
    
    

    return (
        <div className='header'>
            <Link to='/' className="header-logo">
                <div className="header-logo-circle">
                    <p>D</p>
                </div>
                <p>Delizi<span className='header-logo-span'>oso</span></p>
            </Link>

            <div className={`header-links `}>
                <Link 
                    to='/' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/' ? 'active-link' : ''}
                >
                    Home
                </Link>
                <Link 
                    to='/About' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/About' ? 'active-link' : ''}
                >
                    About us
                </Link>
                <Link 
                    to='/OrderOnline' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/OrderOnline' ? 'active-link' : ''}
                >
                    Order online
                </Link>
                <Link 
                    to='/Reservation' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Reservation' ? 'active-link' : ''}
                >
                    Reservation
                </Link>
                <Link 
                    to='/Contact' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/Contact' ? 'active-link' : ''}
                >
                    Contact us
                </Link>
                <Link 
                    to='/checkout' 
                    // onClick={() => setMenuOpen(false)} 
                    className={location.pathname === '/checkout' ? 'active-link' : ''}
                >
                    Checkout
                </Link>
            </div>

            <div className="header-counter-button">
                <Link to='/Cart'>
                    <div className="header-counter">
                        <MdOutlineShoppingCart />
                        <div className="header-counter-num">
                            {cartItems.length === 0 ? (<p>0</p>) : (<sup>{cartItems.length}</sup>)}
                        </div>
                    </div>
                </Link>

                <Link to='/Login'>
                    <button className='header-counter-button-button' >Login</button>
                </Link>

                <button className="setting-btn" onClick={() => toggleOpen()}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar1"></span>
                </button>
        
                <div 
                    className={`header-counter-button-rectangles`} 
                >
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-rectangle"></div>
                    <div className="header-counter-button-circle"></div>
                </div>
            </div>

            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <div className={` sidebar-link`}>
                    <Link 
                        to='/' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/' ? 'active-link' : ''}
                    >
                        Home
                    </Link>
                    <Link 
                        to='/About' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/About' ? 'active-link' : ''}
                    >
                        About us
                    </Link>
                    <Link 
                        to='/OrderOnline' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/OrderOnline' ? 'active-link' : ''}
                    >
                        Order online
                    </Link>
                    <Link 
                        to='/Reservation' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/Reservation' ? 'active-link' : ''}
                    >
                        Reservation
                    </Link>
                    <Link 
                        to='/Contact' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/Contact' ? 'active-link' : ''}
                    >
                        Contact us
                    </Link>
                    <Link 
                        to='/checkout' 
                        // onClick={() => setMenuOpen(false)} 
                        className={location.pathname === '/checkout' ? 'active-link' : ''}
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
