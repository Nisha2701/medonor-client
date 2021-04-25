import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import img1 from './img1.png';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.PNG';
import logo from './logo.png';
import {Jumbotron , Container , Row , Col , Button} from 'react-bootstrap'
function Home() {
    
    return (
        <div className="homepage">
            <Jumbotron fluid  className="jumbo">
                <Container>
                    <img className="logo" src={logo} alt="" />
                    <h1>Reimagining access for those in need</h1>
                    <p>
                        MEDONOR drives the future of healthcare by 
                        connecting people with surplus medications.
                    </p>
                </Container>
            </Jumbotron>

            <Container className="content">
                <Row>
                    <Col>
                        <h3>
                            Why Medicine?
                        </h3>
                        <p className="extra">
                            Because our health is a fundamental part of being human. 
                            Without it, we have nothing.
                        </p>
                        <p className="para">
                            50 million Indians don’t take their prescribed medication 
                            because they can’t afford it. With soaring copays, deductibles, 
                            and insurance costs, many people are making impossible choices 
                            between medications, food and housing, gas to get to work, 
                            and more. Not taking your medications, however, often leads to 
                            even worse outcomes—heart attacks, strokes, and even higher costs. 
                            This is our nation’s most critical problem, but it doesn’t have 
                            to be. That’s why we’re here. MEDONOR provides access so everyone 
                            gets the care they deserve.
                        </p>
                    </Col>
                    <Col>
                        <img src={img1} alt="" />
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col>
                        <img src={img2} alt="" />
                    </Col>
                    <Col>
                        <h3>
                            MEDONOR saves medicine to save lives
                        </h3>
                        <p className="para">
                            We’re national drug donation law experts who enable health 
                            facilities and pharmacies to donate their unused medicine. 
                            Our system is built to ensure compliance and provide full 
                            liability protection.
                        </p>
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col>
                        <h3>Who can donate?</h3>
                        <p className="para">
                            MEDONOR directly accepts medicine from manufacturers, 
                            pharmacies, wholesalers, and health facilities. If you’re 
                            an individual with unused medicine to donate, you can donate 
                            through one of our partners. You can also contribute to our 
                            cause with a monetary donation. Every little bit helps, and 
                            we appreciate your support.
                        </p>
                    </Col>
                    <Col>
                        <img src={img3} alt="" />
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col>
                        <img src={img4} alt="" />
                    </Col>
                    <Col>
                    <h3>How does it work?</h3>
                        <p className="para">
                            We take surplus medications off of your hands and get them to the 
                            people who need them.
                        </p>
                        <Button variant="outline-info">Learn more</Button>{' '}
                    </Col>
                </Row>

            </Container>


        </div>
        );
    }
    export default Home;