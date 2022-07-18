import React from "react";
import './section.css';
import {ImUser} from "react-icons/im";
import {AiOutlineClockCircle} from "react-icons/ai";
import {FaHandshake,FaUserGraduate} from "react-icons/fa";
const section=()=>{
    return(
        <div>
            <div className="welcome-div">
                <div>
                    <span className="head1">Welcome to</span><br/>
                    <span className="head2" >LearningEra</span><br/><br/><br/>
                    <span className="head3">Learn Limitless Earn Limitless</span>
                </div>
            </div>
            <div className="welcome-div-2">
                <div><ImUser className="icons"></ImUser>
                    <p className="regstu-1">20,000+</p>
                    <p className="regstu-2">REGISTERED STUDENTS</p>
                </div>
                <div><FaUserGraduate className="icons"/>
                    <p className="regstu-1">5,000+</p>
                    <p className="regstu-2">STUDENTS PLACED</p>
                </div>
                <div><AiOutlineClockCircle className="icons"/>
                    <p className="regstu-1">109 Hours</p>
                    <p className="regstu-2">TRAININGS DELIVERED</p>
                </div>
                <div><FaHandshake className="icons"/>
                    <p className="regstu-1">50+</p>
                    <p className="regstu-2">PREFERRED PATNERS</p>
                </div>
            </div>
        </div>
    )
}
export default section;