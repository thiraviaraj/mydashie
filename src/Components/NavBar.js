import React, {useState} from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

let NavBar = () => {
    let [isOpen, setIsOpen] = useState(true);
    let openSlideMenu = () => {
        if(isOpen) {
            document.getElementById('side-menu').style.width = '250px';
            document.getElementById('Container').style.marginLeft = '250px';
            setIsOpen(false);
        } else {
            document.getElementById('side-menu').style.width = '0';
            document.getElementById('Container').style.marginLeft = '0';
            setIsOpen(true);
        }
        
    }
    return (
        <Router>
        <nav className="navbar">
            <span className="open-slide" onClick={()=>openSlideMenu()}>
                <a href="#">
                    <svg width="30" height="28">
                        <path d="M0,5 30,5" stroke="#3b5998" strokeWidth="5"/>
                        <path d="M0,14 30,14" stroke="#3b5998" strokeWidth="5"/>
                        <path d="M0,23 30,23" stroke="#3b5998" strokeWidth="5"/>
                    </svg>
                </a>
            </span>
        
            <ul className="navbar-nav">
                <li><NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Home</NavLink></li>
                <li><NavLink to="/About" exact activeStyle={
              { color:'green' }
            }>About</NavLink></li>
                <li><NavLink to="/Services" exact activeStyle={
              { color:'green' }
            }>Services</NavLink></li>
                <li><NavLink to="/Contact" exact activeStyle={
              { color:'green' }
            }>Contact</NavLink></li>
            </ul>
        </nav>
        </Router>
    )
}

export default NavBar;