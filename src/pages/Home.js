import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

import Services from '../components/Services';
import Team from '../components/Team';

import CoreValue from '../components/CoreValue';
import Pictures from '../components/Pictures';


function Home() {
  return (
    <div>
      <div id="hero" className="mb-5">
      
        <div className="hero-container">
            <h1>Welcome To CM42</h1>
            <h2>A Complete Solution For Your Business</h2>
            <Link to="/" className="main-btn">Contact!</Link>
        </div>   
      
    </div>
    <Services />
    <Pictures />
    <CoreValue />
    <Team />
   
    </div>
    
  );
}

export default Home;
