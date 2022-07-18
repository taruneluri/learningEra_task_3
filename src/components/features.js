import React from "react";
import './features.css';
import {FiHome} from 'react-icons/fi';
import {FaRegLightbulb,FaRegQuestionCircle} from 'react-icons/fa';
import {MdPersonalVideo,MdOutlineMoney} from 'react-icons/md';
import {GiSevenPointedStar} from 'react-icons/gi';
import {FcAssistant} from 'react-icons/fc';
import {BsPersonCheck} from 'react-icons/bs';
const features=()=>{
    return(
        <div className="features-div">
            <div className="features-space"></div>
            <div className="features-heading">Features</div>
            <div className="features-1">
                <div>
                    <FiHome className="icons"/>
                    <p className="regstu-2">Live & interactive</p>
                    <p className="regstu-2">Classes</p>
                </div>
                <div><FaRegLightbulb className="icons"/>
                <p className="regstu-2">Projects and</p>
                <p className="regstu-2">Assignments</p>
                </div>
                <div><FaRegQuestionCircle className="icons"/>
                <p className="regstu-2">Extra Doubt</p>
                <p className="regstu-2">Sessions</p>
                </div>
                <div><MdPersonalVideo className="icons"/>
                <p className="regstu-2">Highly Experienced</p>
                <p className="regstu-2">Faculty</p>
                </div>
            </div>
            <div className="features-1">
                <div>
                    <GiSevenPointedStar className="icons"/>
                    <p className="regstu-2">Certification and</p>
                    <p className="regstu-2">Awards</p>
                </div>
                <div><FcAssistant className="icons"/>
                <p className="regstu-2">Carrer Assistance</p>
                </div>
                <div><MdOutlineMoney className="icons"/>
                <p className="regstu-2">Cost Effective</p>
                </div>
                <div><BsPersonCheck className="icons"/>
                <p className="regstu-2">Internship</p>
                <p className="regstu-2">Assurance</p>
                </div>
            </div>
        </div>
    )
}
export default features;
