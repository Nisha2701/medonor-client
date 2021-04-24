import React, { Component } from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import {Link} from 'react-router-dom'
import './forms.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

class addMedicine extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="forms__section">
                <Container>
                <Col md={12} className="contact__main__content">
                        <Row>
                            <Breadcrumb className="mb-4 page__navigation__breadCrump">
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Medicine</BreadcrumbItem>
                            </Breadcrumb>
                        </Row>
                        <div>
                            <Jumbotron className='form-jumbotron'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="form__icon"></span>Medicine Name</Form.Label>
                                        <input name="title" className="form-control" type="text"  placeholder="Write the descriptive name." onChange={this.handleInputChange} />
                                        <div className="invalid__feedback"></div>
                                    </Form.Group>

                                    

                                    
                                    <Button className='mt-4'  variant="info"><span className='fa fa-plus mr-3' />Donate Medicine</Button>
                            </Form>
                          </Jumbotron>
                        </div>
                
                </Col>
                </Container>
          </div>
        )
    }
}

export default addMedicine;