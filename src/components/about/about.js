import React, { Component } from 'react'
import "./about.css";
import Capture3 from '../../images/Capture3.PNG';
import profile from '../../images/profile.jpg';
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";



class about extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  <div>
      <div className=" text-center">
        <div className="about">
          <h1>We save medicines to save lives.</h1>
          <h1>You can help.</h1>

          <p>Not everyone has medication to donate.</p>
          <p >But your monetary support helps us get surplus medication to people in need.</p>

          <img className="image1" src={Capture3} alt="" />
          <br></br>
          <br></br>

          <h2>Vision and Mission</h2>
        </div>

        <hr></hr>

      <div className="container">
        <Row>
          <Col md={6} className="vis-mis">
            <h2>
                Vision
                        </h2>
            <p>
                A happy, healthy and creative child whose rights are protected and honoured in a society that is built on respect for dignity, justice and equity for all.
                To enable peoples’ collectives and movements encompassing diverse segments, to pledge their particular strengths, working in partnership to secure, protect and honour the rights of India’s children.
                        </p>
                        </Col>
        

          <Col md={6} className="vis-mis">
            <h2>
                Mission
                </h2>
            <p >
                To enable people to take responsibility for the situation of the deprived Indian child and so motivate them to seek resolution through individual and collective action thereby enabling children to realise their full potential
                To make people discover their potential for action and change
                        </p>
                        </Col>
          </Row>
          </div>
          <hr></hr>
        
        </div>
        
     
  
    <span class="brmedium"></span>
    <div className=" text-center about">
          <h1>Developers</h1>
          </div>
          <span class="brmedium"></span>
    <div className="container">      
    <Row>
    <CardGroup>
      <Col md={3}>
  <Card className="one">
    <Card.Img  className="picture " variant="top" src={profile} />
    <Card.Body>
      <Card.Title className="text-center name-text">Nisha</Card.Title>
      <Card.Text>
        <p className="text-center role-text">Role</p>

         
      </Card.Text>
    </Card.Body>
 
  </Card>
  </Col>
  <Col md={3}>
  <Card >
    <Card.Img className="picture" variant="top" src={profile}  />
    <Card.Body>
      <Card.Title className="text-center name-text">Gursimran Kaur</Card.Title>
      <Card.Text>
      <p className="text-center role-text">Role</p>
      </Card.Text>
    </Card.Body>
 
  </Card>
  </Col>
  <Col md={3}>
  <Card >
    <Card.Img className="picture" variant="top" src={profile}  />
    <Card.Body>
      <Card.Title className="text-center name-text">Aditi Panigrahi</Card.Title>
      <Card.Text>
      <p className="text-center role-text">Role</p>
      </Card.Text>
    </Card.Body>
 
  </Card>
  </Col>
  <Col md={3}>
  <Card>
    <Card.Img className="picture" variant="top" src={profile} />
    <Card.Body>
      <Card.Title className="text-center name-text">Jatin Gupta</Card.Title>
      <Card.Text>
      <p className="text-center role-text">Role</p> 
      </Card.Text>
    </Card.Body>
 
  </Card>
  </Col>
 
</CardGroup>
</Row>
</div>
<span class="brmedium"></span> 
</div >


        
    )
  }
}
export default about;