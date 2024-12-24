import React, { Component } from 'react';
import './footer.css';

class footer extends Component{
    render () {
        return(
            <div id="footer">
                <div className="container footer-row">
                <hr />  
                <div className="footer-left-col">
                <div className="footer-links">
                    <div className="link-title">
                    <h4>Product</h4>
                    <small>Our Plan</small>
                    <br />
                    <small>Free Trial</small>
                    </div>
                    <div className="link-title">
                    <h4>About Us</h4>
                    <small>Request Demo</small>
                    <br />
                    <small>FAQs</small>
                    </div>
                    <div className="link-title">
                    <h4>Support</h4>
                    <small>Features</small>
                    <br />
                    <small>Contact Us</small>
                    </div>
                    <div className="link-title">
                    <h4>Explore</h4>
                    <small>Find a nonprofit</small>
                    <br />
                    <small>Corporate Solution</small>
                    </div>
                </div>
                </div>
                <div className="footer-right-col">
                <div className="footer-info">
                    <div className="copyright-text">
                    <small>support@Prestigo.com</small>
                    <br />
                    <small>&copy; copyright 2023 Prestigo</small>
                    <br />
                    <small>&copy; Abdallah Jertila</small>
                    <br />
                    </div>
                    <div className="slogan">
                    </div>
                </div>
                </div>
            </div>
          </div>
          
        );
        
    }
}
export default footer;