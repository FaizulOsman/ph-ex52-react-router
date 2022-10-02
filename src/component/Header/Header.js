import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'aqua' } : undefined} to='/about'>About</NavLink>
            <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'aqua' } : undefined} to='/products'>Products</NavLink>
            <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'aqua' } : undefined} to='/posts'>Posts</NavLink>
            <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'aqua' } : undefined} to='/friends'>Friends</NavLink>
        </div>
    );
};

export default Header;