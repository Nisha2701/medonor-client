import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blog_page.css";
import img1 from './img1.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import {Image , Container , Row , Col , Button , Card , Jumbotron, Form , Badge } from 'react-bootstrap'


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

                        
                        <Card border="light" className="card-texts">
                            <Row>
                                <Col  sm={4} className="article-card-image-col">
                                    <Image src={img1}  className="article-card-image" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Badge variant="info" className="category-pill">
                                            COVID-19
                                        </Badge>{' '}
                                        <Card.Title className=" card-title weight">Explained: What’s changed in second wave</Card.Title>
                                        <Card.Text className="card-title-desc">
                                            Rachel Green | 23 Apr 2021
                                        </Card.Text>
                                        <Button variant="light" size="sm">Read more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        <Card border="light" className="card-texts">
                            <Row>
                                <Col  sm={4} className="article-card-image-col">
                                    <Image src={img1}  className="article-card-image" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Badge variant="info" className="category-pill">
                                            COVID-19
                                        </Badge>{' '}
                                        <Card.Title className=" card-title weight">Explained: What’s changed in second wave</Card.Title>
                                        <Card.Text className="card-title-desc">
                                            Rachel Green | 23 Apr 2021
                                        </Card.Text>
                                        <Button variant="light" size="sm">Read more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        <Card border="light" className="card-texts">
                            <Row>
                                <Col  sm={4} className="article-card-image-col">
                                    <Image src={img1}  className="article-card-image" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Badge variant="info" className="category-pill">
                                            COVID-19
                                        </Badge>{' '}
                                        <Card.Title className=" card-title weight">Explained: What’s changed in second wave</Card.Title>
                                        <Card.Text className="card-title-desc">
                                            Rachel Green | 23 Apr 2021
                                        </Card.Text>
                                        <Button variant="light" size="sm">Read more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        <Card border="light" className="card-texts">
                            <Row>
                                <Col  sm={4} className="article-card-image-col">
                                    <Image src={img1}  className="article-card-image" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Badge variant="info" className="category-pill">
                                            COVID-19
                                        </Badge>{' '}
                                        <Card.Title className=" card-title weight">Explained: What’s changed in second wave</Card.Title>
                                        <Card.Text className="card-title-desc">
                                            Rachel Green | 23 Apr 2021
                                        </Card.Text>
                                        <Button variant="light" size="sm">Read more</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col xs lg="4" className="right-col">
                        <Card border="light" style={{ width: '18 rem' }} className="right-col-content-1">
                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Read the latest blogs from the Health Foundation on health care improvement, quality, sustainability and population health
                                </Card.Text>
                            </Card.Body>
                        </Card>
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