import React from 'react';
import {Form , Button , FloatingLabel} from 'react-bootstrap';
import '../styles/Contact.css';
const Contact = () => {
  return (
  <div>

    <h1 className="header-text">
      Contuct Us 
    </h1>
    <hr />
    <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <FloatingLabel controlId="floatingTextarea" className="mb-3">
  <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Enter Message" />
  </FloatingLabel>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </div>
  );
};

export default Contact;
