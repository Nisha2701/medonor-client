import React, { Component } from 'react'
import "./ngoBeneficiary.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import {fetchNgoBeneficiaries } from '../../redux/actions/ngobeneficiary.js';


const mapStateToProps = (state) => {
  return {
    ngobeneficiaries : state.ngobeneficiaries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNgoBeneficiaries: ()=>dispatch(fetchNgoBeneficiaries()),
  };
};

class NgoBeneficiaries extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNgoBeneficiaries();
  }

  renderNgoBeneficiaries = (ngobeneficiaries,key) => {
    return (
      <Col md={6}>
            <ListGroup.Item className="list-style">
                 <p>{ngobeneficiaries.description} </p>
                 
                 <i className="b-name" >Name</i>
                 <p className="b-name">{ngobeneficiaries.author.name}</p>
                
                 </ListGroup.Item>
      </Col>
    )
  }
  render() {
    if (this.props.ngobeneficiaries.isLoading) {
      return <h1>Loading</h1>;
    }else if (this.props.ngobeneficiaries.errMess) {
      return <h1>{this.props.ngobeneficiaries.errMess}</h1>;
    }
    return (
      <div className="container">

        <div className="title">
          <h2 data-text="Donor Speaks">NGO Beneficiary Talks</h2>
        </div>
        <hr className="sep-2" />
        <br></br>

        <ListGroup>
          <Row className="list-setting">
              {this.props.ngobeneficiaries.ngobeneficiaries.map((item, key)=>{

              })}
          </Row>
        </ListGroup>




      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NgoBeneficiaries);