import React, { Component } from 'react'
import "./medicinelist.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

class medlist extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (

        <div >
          <div className="head text-center">
          <h1>Medicines Available</h1>
          </div>
         
          <hr></hr>
          <br></br>

          <div className="containerr">
        <Row>
          <Col md={4}>
         
         <Card className="cdd-style bkg-im">
  
  <Card.Body>
     
      
    <Card.Title className="medi-name">Paracetamol</Card.Title>
  
    <br></br>
    <Card.Text>
     <p><i className="cdd-text">Amount: </i>2 packets</p>
     <p><i className="cdd-text">Expiry: </i>25/10/2021</p>
     <p><i className="cdd-text">Donor: </i>Joey</p>
     <p><i className="cdd-text">Address: </i>#252 Sector-16 A, Chandigarh</p>
    </Card.Text>
    <Button variant="outline-primary"  className="btt-style">Contact now</Button>{' '}
  </Card.Body>
</Card>
</Col>  

<Col md={4}  >
         <Card className="cdd-style bkg-im">
  <Card.Body>
    
    
    <Card.Title className="medi-name">Azithromycin</Card.Title>
    <br></br>
    <Card.Text>
    <p><i className="cdd-text">Amount: </i>4 packets</p>
     <p><i className="cdd-text">Expiry: </i>27/05/2023</p>
     <p><i className="cdd-text">Donor: </i>Joey</p>
     <p><i className="cdd-text">Address: </i>#252 Sector-16 A, Chandigarh </p>
    </Card.Text>
    <Button variant="outline-primary" className="btt-style">Contact Now</Button>{' '}
  </Card.Body>
</Card>
</Col>
<Col md={4}  >
         <Card className="cdd-style bkg-im">
  <Card.Body>
   
   
    <Card.Title  className="medi-name">Saridon</Card.Title>
    <br></br>
    <Card.Text>
    <p><i className="cdd-text">Amount: </i> 3 packets</p>
     <p><i className="cdd-text">Expiry: </i>5/12/2022</p>
     <p><i className="cdd-text">Donor: </i>Joey</p>
     <p><i className="cdd-text">Address: </i>#252 Sector-16 A, Chandigarh</p>
    </Card.Text>
    
    <Button variant="outline-primary"  className="btt-style">Contact Now</Button>{' '}
  </Card.Body>
</Card>

  </Col>
  </Row>
  <br></br>

  <Row>
  <Col md={4}  >
         <Card className="cdd-style bkg-im">
  <Card.Body>
   
   
    <Card.Title  className="medi-name">Saridon</Card.Title>
    <br></br>
    <Card.Text>
    <p><i className="cdd-text">Amount: </i> 3 packets</p>
     <p><i className="cdd-text">Expiry: </i>5/12/2022</p>
     <p><i className="cdd-text">Donor: </i>Joey</p>
     <p><i className="cdd-text">Address: </i>#252 Sector-16 A, Chandigarh</p>
    </Card.Text>
    
    <Button variant="outline-primary"  className="btt-style">Contact Now</Button>{' '}
  </Card.Body>
</Card>
</Col>
</Row>

    
      </div>
      
      </div>

)
}
}
export default medlist;
