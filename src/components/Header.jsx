import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar ,Nav } from 'react-bootstrap';
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
    <Navbar.Brand href="#home">
      <img src={logo} alt="logo" className="logo" width="70" />
    </Navbar.Brand>
    <div className="social ml-lg-5 pl-lg-2">
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
      </div>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    {/* <Nav>
      <a className="nav-link" href="/">Home</a>
      <a href="/gallery" className="nav-link">Gallery</a>
      <a href="/about" className="nav-link">About</a>
      <a href="/contact" className="nav-link">Contact</a>
      <Link to="gallery" >Open in Gallery</Link>
    </Nav> */}
    <div className="navbar-nav m-auto">
      <a className="nav-link" href="/">Home</a>
      <a href="/gallery" className="nav-link">Gallery</a>
      <a href="/about" className="nav-link">About</a>
      <a href="/contact" className="nav-link">Contact</a>
    </div>
    </Navbar.Collapse>
    
  </Navbar>


  );
}

export default Header;

