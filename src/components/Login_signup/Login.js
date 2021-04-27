import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import ReactDOM from 'react-dom';
//import Carousel from 'react-responsive-carousel';
//import {Badge} from 'react-bootstrap' ;
import './Login.css';
import Crousel from './Carousel';


const Login = (props) => {
  return (
    <Form>


          <div className="Apcarousel">
            <Crousel />
          </div>




          <div className="Login">
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
          </div>
    </Form>
  );
}

export default Login;