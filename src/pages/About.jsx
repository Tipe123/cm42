import React from 'react';
import '../styles/About.css';
import {Card } from 'react-bootstrap';

const About = () => {
  return (
    <section>
       <div className="about-section">
      <div className="inner-container">
        <div className="row">
        <h1>
          About Us
          <div className="border"></div>
        </h1>
        </div>
        
        <p className="text">
        CM42 PTY LTD is an interpreneural business with strong ambitions to become a leading service organisation in South Africa. We are a small team of highly skilled and experienced professionals who are dedicated to providing the best possible service to our clients. We also employ highly skilled experts with a collective 20 years of experience in the field of Electrical and Mechanical Engineering. Our services are not limited to any specific original equipment manufacturer (OEM) , But Cover a wide 
        </p>
          </div>
    </div>
   


<div className="row mt-5">
  <div className="col-md-6">
      <Card style={{ width: '90%' }} className="container">
      <Card.Body >
        <Card.Title>Vission</Card.Title>
        <hr />
        <Card.Text>
        We exist to improve the productivity of our customers and to provide the best possible service to our clients by supplying competetive original and genuine electrical parts and services that help our customers to maximize the performance of their electrical and engineering asset investments . 
        </Card.Text>
        
        </Card.Body>
      </Card>
  </div>
  <div className="col-md-6">
  <Card style={{ width: '90%' }} className="container">
  <Card.Body>
    <Card.Title>Our Mission</Card.Title>
    <hr />
    <Card.Text>
    Our mission is to provide quality services and skilled people to delight our customers and provide the most effective world class services for our clients through supply and maintenance. 
    </Card.Text>
    
  </Card.Body>
</Card>
  </div>
</div>
    </section>
   
  );
};

export default About;
