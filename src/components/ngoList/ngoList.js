import React, { Component } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Table from 'react-bootstrap/Table';
import "./ngoList.css";

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
        <Table hover className="tablepad" >
        <thead>
          <tr className="tblrow">
            
            <th className="text-center table-heading theader">NGO</th>
            <th className="text-center table-heading theader">Address</th>
            <th className="text-center table-heading theader" >Contact</th>
            
          </tr>
          
        </thead>
        <tbody>
            
              <tr className="tblrow">
                
                <td>HelpAge India</td>
                
                <td className="text-center">House No. 5745 GF, Market Rd, Sector 38 West, Chandigarh</td>
                <td className="text-center last-col">
                <p> 0172 269 3869<br/> www.helpageindia.org  </p>
                </td>
                
              </tr>

              
              <tr className="tblrow">
                
                <td>Society for the Prevention of Cruelty to Animals</td>
                <td className="text-center">Sector 38 West, Near Motor Market, Opposite Chandigarh Transport Depot, Chandigarh</td>
                <td className="text-center last-col">
                    <p>0172 269 6450<br/>www.spcachandigarh.org  </p>
                
                    </td>
              </tr>
              <tr className="tblrow">
                
                <td>Nanhe Kadam</td>
                <td className="text-center">S.C.O.36 (First Floor) Sector 26, Madhya Marg, Chandigarh</td>
                <td className="text-center last-col">
                <p>NA<br/> www.nanhekadam.org</p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>Saarthi</td>
                <td className="text-center">573,  Near Govt. Middle School, Kishangarh, Chandigarh</td>
                <td className="text-center last-col">
                <p>094639 71544<br/>www.saarthi.org.in  </p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>ArriveSAFE</td>
                <td className="text-center">H No. 268, Sector 21A, Chandigarh</td>
                <td className="text-center last-col">
                <p>0172 462 3232<br/> www.arrivesafe.org </p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>Sankalp NGO</td>
                <td className="text-center">3156, Sector 38 B Rd, Sector 38-D, Sector 38, Chandigarh</td>
                <td className="text-center last-col">
                <p>082838 63156<br/>www.sankalpngo.org.in</p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>Salaam Zindagi Charitable Trust</td>
                <td className="text-center">#2854, Sector 38-C, Chandigarh</td>
                <td className="text-center last-col">
                <p>1800 137 1317<br/>www.salaamzindagi.org</p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>EduCARE India</td>
                <td className="text-center">New Colony, Khudda Lahora, Chandigarh</td>
                <td className="text-center last-col">
                <p>098158 61995<br/>www.educare.in </p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>Safe Hands Rehabilitation Society</td>
                <td className="text-center">564/04, Shivalik Vihar, Chandigarh</td>
                <td className="text-center last-col">
                <p>084270 09040<br/>www.shrs.ngo</p>
                </td>
              </tr>
              <tr className="tblrow">
                
                <td>Nav Chetna</td>
                <td className="text-center"> Office No. 22 Near Shop No. 22, Near Guga Mari Temple, Khuda Lahora, Chandigarh</td>
                <td className="text-center last-col">
                <p>098887 54488<br/>www.navchetna.ngo </p>
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