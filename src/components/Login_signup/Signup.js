import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email/Username</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email/Username" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter Email" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleUsername">Name</Label>
        <Input type="text" name="Username" id="name" placeholder="Enter Name"/>
      </FormGroup>
      
      <Button>Sign Up</Button>
    </Form>
  );
}

export default Signup;