import React, {useState} from 'react';
import "./Error.css"
import errorimg from "../../images/Caraousel/Error.png";

const Error = (props) => {
return(
    <div className="ErrorContainer">
        <center>
        <div className="Errorimage">
            <img src = {errorimg} />                
        </div>
        </center>
        <div className="Errortext">
            <center>
            <h1>ERROR 404</h1>
            </center>            
        </div>
    </div>
);
}

export default Error;