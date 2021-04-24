import React, { Component } from 'react';
class Home extends Component{
    render(){
        return(
            <div className="text-secondary px-4 py-5 text-center" style={{background: '#224D57'}} >
        <div className="py-5" >
        <img className="d-block mx-auto mb-4" alt="" width="160" height="150"></img>
        <h1 className="display-5 fw-bold text-white" style={{fontsize: '300%'}}>Reimagining access for those in need</h1>
        <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white" style={{fontsize: '120%'}}><b>MEDONOR</b> drives the future of healthcare by connecting people with surplus medications.</p>
            <p className="fs-5 mb-4 text-white" style="font-size: 120%;"><b>Register As</b></p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold mr-sm-3">NGO</button>
            <button type="button" className="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold">Donor</button>
            </div>
        </div>
        </div>
    </div>
        )
    }
}

export default Home;