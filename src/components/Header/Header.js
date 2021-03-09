import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './Header.css'
  
import { Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >
                <Nav className="mr-auto">
                <Link className="menu" to="/home">Home</Link>
                <Link className="menu" to="/about">About</Link>
                <Link className="menu" to="/user">User</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;