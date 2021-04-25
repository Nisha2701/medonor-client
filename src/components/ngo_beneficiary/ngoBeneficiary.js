import React, { Component } from 'react'
import "./ngoBeneficiary.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from "react-bootstrap";

class ngoBeneficiary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">

        <div className="title">
          <h2 data-text="Donor Speaks">NGO Beneficiary Talks</h2>
        </div>
        <hr className="sep-2" />
        <br></br>

        <ListGroup>
          <Row className="list-setting">
            <Col md={6}>
              <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">NGO</p>
                
                 </ListGroup.Item>
             
            </Col>
            <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">NGO</p>
                
                 </ListGroup.Item>
            </Col>
          </Row>
          <Row className="list-setting">
            <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name" >NGO</p>
                
                 </ListGroup.Item>
            </Col>
            <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">NGO</p>
                
                 </ListGroup.Item>
            </Col>
          </Row>
       
        <Row className="list-setting">
            <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">NGO</p>
                
                 </ListGroup.Item>
            </Col>
            <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab tenetur 		at delectus aspernatur similique modi, est, debitis sit voluptate dolorem 			eligendi odio laborum magni nesciunt? Aliquam omnis molestiae at. Cras justo odio </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">NGO</p>
                
                 </ListGroup.Item>
            </Col>
          </Row>
        </ListGroup>




      </div>
    )
  }
}
export default ngoBeneficiary;