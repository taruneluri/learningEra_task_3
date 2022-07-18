import React from "react";
import './fit.js';
import logo from './1.png';
import {FaFacebook,FaInstagramSquare}from 'react-icons/fa'
const footer=()=>{
    return(<>
        <div className="foot-main">
            <div className="foot-sub">
                <div className="footer-first">
                    <span className="foot-sub-h ">Address</span><br></br>
                    <span className="foot-sub-a">USA: 510, Business Forest, DR Tampa,</span><br></br>
                    <span className="foot-sub-a">Florida 33634</span><br></br><br></br>
                    <span className="foot-sub-a">India: A-14 Workly Space Sector 59 Noida</span><br/>
                    <span className="foot-sub-a">201301</span>
                </div>
                <div>
                    <span className="foot-sub-h">Contact</span><br></br>
                    <span className="foot-sub-a">help@learningera.in</span><br/>
                    <span className="foot-sub-a">+91-8080803393</span>
                </div>
                <div>
                    <span className="foot-sub-h">Quick Links</span><br></br>
                    <a href="#">About us</a><br></br>
                    <a href="#">Register with us</a><br></br>
                    <a href="#">Privacy Policy</a>

                </div>
                <div>
                    <span className="foot-sub-h">Social</span><br></br>
                    <FaFacebook size={30}></FaFacebook><FaInstagramSquare size={30} className="foot-icon"></FaInstagramSquare>
                </div>
            </div>
            <div className="foot-last">
                <img src={logo} className='foot-icons'></img>
                <div>
                    <span>Learningera | Concept by TooMuchTech</span>
                </div>
                
            </div>
        </div>
    </>)
}
export default footer;