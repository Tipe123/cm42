import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar ,Nav } from 'react-bootstrap';
import '../styles/Header.css'
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    <Nav>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  );
}

export default Header;

