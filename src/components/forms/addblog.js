import React, { Component } from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import {Link} from 'react-router-dom'
import './forms.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import blogFormBG from "../../images/blogform.jpg";



class addBlogs extends Component {
    constructor(props) {
        super(props);
    }
      
      
      
      render() {
        return (
            <div style={{
                backgroundImage : `url(${blogFormBG})`,
                backgroundSize : "cover",
                padding : "5% 10% 5% 10%"
            }} >
            <div className="forms__section">
                <Container>
                <Col md={12} className="contact__main__content">
                       
                        <Row>
                            <Breadcrumb className="mb-6 page__navigation__breadCrump">
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Blog</BreadcrumbItem>
                            </Breadcrumb>
                        </Row>
                        <div className="blogform_div">
                            <Jumbotron className='form-jumbotron'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="form__icon"></span>Title</Form.Label>
                                        <input name="title" className="form-control" type="text"  placeholder="Give a descriptive title." />
                                        <div className="invalid__feedback"></div>
                                    </Form.Group>

                                    <Form.Group>
                                    <Form.Label><span className="form__icon"></span>Describe content Here</Form.Label>
                                        <div className="invalid__feedback"></div>
                                        <Form.Control as="textarea" rows={10} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="form__icon"></span>Read Duration</Form.Label>
                                        <input name="duration" className="form-control" type="text"  placeholder="Expected read duration of Blog in minutes." onChange={this.handleInputChange} />
                                        <div className="invalid__feedback"></div>
                                    </Form.Group>
                                    <Button className='mt-4'  variant="info"><span className='fa fa-paper-plane mr-3' />Publish Blog</Button>
                            </Form>
                          </Jumbotron>
                        </div>
                
                </Col>
                </Container>
          </div>
          </div>
        )
      }
}

export default addBlogs;