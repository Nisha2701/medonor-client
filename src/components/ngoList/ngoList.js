import React, { Component } from 'react'
import "./ngoList.css";
import Table from 'react-bootstrap/Table';

class ngoList extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div className="container ">
               <div className="about text-center">
          <h1>NGO's</h1>
          </div>
          <br></br>
          <div className="body-text table-setting">
        <Table hover >
        <thead>
          <tr>
            
            <th className="text-center table-heading">NGO</th>
            <th className="text-center table-heading">Address</th>
            <th className="text-center table-heading" >Contact</th>
            
          </tr>
          
        </thead>
        <tbody>
          <tr>
            
            <td>Ngo name</td>
            
            <td className="text-center">Sector - 7</td>
            <td className="text-center last-col">
            <p>9836462788<br/>ngo@gmail.com </p>
            </td>
            
          </tr>
          <tr>
            
            <td>Ngo name</td>
            <td className="text-center">Sector - 40</td>
            <td className="text-center last-col">
                <p>9836462788<br/>ngo@gmail.com </p>
            
                </td>
          </tr>
          <tr>
            
            <td>Ngo name</td>
            <td className="text-center">Sector - 40</td>
            <td className="text-center last-col">
            <p>9836462788<br/>ngo@gmail.com </p>
            </td>
          </tr>
          
        </tbody>
      </Table>
      </div>
      </div>

)
}
}
export default ngoList;