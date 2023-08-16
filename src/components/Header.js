import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from '../utils/constants';
const Header = () => {

    // if no dependency array => useEffect called on every render
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    useEffect(() => {
        console.log('useEffect called');
    }, []);
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="food logo image"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login">Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
