import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMedicine: null
        };

    }

    onMedicineSelect(medicine){
        this.setState(
            {
                selectedMedicine: medicine
            }
        )
    }

    renderMedicine(medicine){
        if(medicine!=null)
            return(
                <Card>
                    <CardImg top src={medicine.image} alt={medicine.name} />
                    <CardBody>
                      <CardTitle>{medicine.name}</CardTitle>
                      <CardText>{medicine.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    
    }

    render() {
        const menu = this.props.medicines.map((medicine) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                <Card key={medicine.id}
                  onClick={() => this.onMedicineSelect(medicine)}>
                  <CardImg width="100%" src={medicine.image} alt={medicine.name} />
                  <CardImgOverlay>
                      <CardTitle>{medicine.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderMedicine(this.state.selectedMedicine)}
           </div>
           </div>
          </div>
        );
    }
}

export default Medicine;