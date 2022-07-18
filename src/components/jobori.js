import React from "react";
import two from './2.jpg'
import './jobori.css';
const jobori=()=>{
    return(
        <div className="jobori-main">
            <div className="jobori-heading">
                <p>Job Oriented Courses</p>
            </div>
            <div className="jobori-div">
                <div className="jobori-div-1">
                    <div className="jobori-img">
                        <img src={two} className="jobori-img-1"></img>
                    </div>
                    <div className="job-desc-1">
                        <p>Diploma In Stock Market</p>
                    </div>
                    <div className="job-desc-2">
                        <div>
                        <span>Course Duration: 6 Months</span><br/>
                        <span>Number of Certificates: 3</span>
                        </div>
                    </div>
                    <div className="job-desc-3">
                        <div>
                        <button className="job-btn-1">Brochure</button><button className="job-btn-2">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default jobori