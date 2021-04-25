import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';


const Login = (props) => {
  return (
    <Form className="Login">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
          </FormGroup>
        </Col>
      </Row>

      <Button>Sign in</Button>
    </Form>
  );
}

export default Login;