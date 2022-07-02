import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import '../styles/Header.css'
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="myLight" fixed="top" expand="md">
    <Navbar.Brand href="/">
      <img src={logo} alt="logo" className="logo" width="70" />
    </Navbar.Brand>
    <div className="mx-auto">
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
      </div>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    
    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
      <Link className="nav-link" to="/">Home</Link>
      <Link to="gallery" className="nav-link">Gallery</Link>
      <Link to="about" className="nav-link">About</Link>
      <Link to="contact" className="nav-link">Contact</Link>
    </div>
    </Navbar.Collapse>
    
  </Navbar>


  );
}

export default Header;

