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
        this.state = {
            name:'',
            expirydate:'',
            amount:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.formValidation();
        console.log(this.state);
        if(isValid){
            const newMedicine = {
                name: this.state.name,
                expirydate:this.state.expirydate,
                amount:this.state.amount,
                
            };
            this.props.postMedicine(newMedicine);
        }
        
    }

    formValidation = () => {
        const{name,expirydate,amount}=this.state;
        let nameError="", expirydateError="",amountError="",error;
        if(!name.trim()){
            nameError = "Medicine name is required";
            error=true;
        }
        if(!expirydate.trim()){
            expirydateError = "Expiry Date is required";
        }
        if(!amount.trim()){
            amountError = "Amount is required!";
        }
        this.setState(prevState => ({
            errors:{
                name:nameError,
                expirydate:expirydateError,
                amount:amountError
            }
        }))
        return !error;
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
                                    <Form.Label><span className="form_icon"></span>Medicine Name</Form.Label>
                                        <input name="medicine-name" className="form-control" type="text" value={this.state.name} placeholder="Write the descriptive name." onChange={this.handleInputChange} />
                                        <div className="invalid_feedback">{this.state.errors.name}</div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="expiry-date"></span>Expiry-Date</Form.Label>
                                        <input name="expiry-date" className="form-control" type="text" value={this.state.expirydate} placeholder="Mention expiry-date in the format(DD/MM/YYYY)" onChange={this.handleInputChange} />
                                        <div className="invalid_feedback">{this.state.errors.expirydate}</div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="amount"></span>Amount</Form.Label>
                                        <input name="amount" className="amount" type="text" value={this.state.amount} placeholder="Mention Quantity." onChange={this.handleInputChange} />
                                        <div className="invalid_feedback">{this.state.errors.amount}</div>
                                    </Form.Group>
                                    <Button onClick={this.handleSubmit} className='mt-4'  variant="danger"><span className='fa fa-plus mr-3' />Donate Medicine</Button>
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