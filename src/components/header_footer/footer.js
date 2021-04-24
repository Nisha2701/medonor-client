import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="footer-content">
                <h3>MEDONOR</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
                <div class="footer-bottom">
                <p>
                    copyright &copy;MEDONOR | All rights reserved | Terms Of Service | Privacy
                </p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;