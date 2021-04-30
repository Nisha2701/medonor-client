import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blog_page.css";
import img1 from './pic.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import { connect } from 'react-redux';
import { fetchNgoBlog } from '../../redux/actions/ngoblogs';
import {Image , Container ,Button , Row , Col , Card , Jumbotron} from 'react-bootstrap'


function Blog() {
    
    return (
        <div className="blogpage">
            <Jumbotron fluid className="blog-title-main">
                <Container>
                    <p className="blog-title">MEDBLOG <img src="https://www.cry.org/wp-content/themes/cry/images/streak.gif" className="streak-img"/></p> 
                    <p className="blog-title-byline">Amazing people. Amazing stories</p>
                    <p className="blog-title-byline-by">If you’re looking for positive stories of change that will make your day, you’ve come to the right place! </p>
                </Container>
            </Jumbotron>

            

            <Container className="blog-posts ">
                <Row className="row-of-article ">
                    <Col className="left-col">
                        <h2 className="hr-line"><span className="hr-line-content">LATEST POSTS</span></h2>
                        <Row className="article-card">
                            <div>
                                <Image src={img1}  className="article-card-image" />
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title className=" card-title weight">Reconditioning the benefits system for a stronger COVID-19 recovery</Card.Title>
                                    <Card.Text className="card-title-desc">
                                        Rachel Green | 23 Apr 2021
                                    </Card.Text>
                                    <Button variant="light" size="sm">Read more</Button>
                                </Card.Body>
                            </div>
                        </Row>

                        <Row className="article-card">
                            <div>
                                <Image src={img1}  className="article-card-image" />
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title className=" card-title weight">Reconditioning the benefits system for a stronger COVID-19 recovery</Card.Title>
                                    <Card.Text className="card-title-desc">
                                        Rachel Green | 23 Apr 2021
                                    </Card.Text>
                                    <Button variant="light" size="sm">Read more</Button>
                                </Card.Body>
                            </div>
                        </Row>

                        <Row className="article-card">
                            <div>
                                <Image src={img1}  className="article-card-image" />
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title className=" card-title weight">Reconditioning the benefits system for a stronger COVID-19 recovery</Card.Title>
                                    <Card.Text className="card-title-desc">
                                        Rachel Green | 23 Apr 2021
                                    </Card.Text>
                                    <Button variant="light" size="sm">Read more</Button>
                                </Card.Body>
                            </div>
                        </Row>
                    </Col>
                        
                        

                    <Col xs lg="4" className="right-col">
                        <Card.Body className="right-col-card">
                            <Card.Title className=" card-title-right weight">About Us</Card.Title>
                            <hr className="hr-right"/>
                            <Card.Text className="card-title-desc-right">
                                With your support, we address people's critical needs of medication by working with NGOs and various communities, district and state level governments as well as the patients themselves.
                                We focus on supplying medication and influencing public to stop medicine destruction at all levels.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
            
            <Jumbotron className="note-jumbo">
                <Container>
                    <Row>
                        <Col>
                            <Card body border="light" className="note-card">
                                <Row className="small-note-content">
                                    <Col classname="note-sub-col">
                                        <p><img src={pic1} className="small-note-image" /></p>
                                    </Col>
                                    <Col md="auto">
                                        <p className="small-note"> All our efforts are made possible only because of your support</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col>
                            <Card body border="light" className="note-card">
                                <Row className="small-note-content">
                                    <Col classname="note-sub-col">
                                        <p><img src={pic2} className="small-note-image" /></p>
                                    </Col>
                                    <Col md="auto">
                                        <p className="small-note"> Your donations are tax exempted under 80G of the Indian Income Tax Act</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col>
                            <Card body border="light" className="note-card">
                                <Row className="small-note-content">
                                    <Col classname="note-sub-col">
                                        <p><img src={pic3} className="small-note-image" /></p>
                                    </Col>
                                    <Col md="auto">
                                        <p className="small-note"> Your donation transactions are completely safe and secure</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>



            

            
        </div>
        );
    }
    export default Blog;