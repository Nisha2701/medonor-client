import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import Carousel from './Carousel';


const Login = (props) => {
  return (
    <Form className="Login">

            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
            </FormGroup>

      <Button className = 'butto'>Sign in</Button>
      <br />
      <Button className = 'butto'>New User? Signup</Button>
    </Form>
  );
}

export default Login;