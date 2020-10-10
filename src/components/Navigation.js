import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (<div className="nav_btn">
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/about'>About</Link></button>
    </div>);
}

export default Navigation;