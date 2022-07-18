import React from "react";
import two from './5.jpg'
import './jobori.css';
const lancou=()=>{
    return(
        <div className="jobori-main">
            <div className="jobori-heading">
                <p>Language Courses</p>
            </div>
            <div className="jobori-div">
                <div className="jobori-div-1">
                    <div className="jobori-img">
                        <img src={two} className="jobori-img-1"></img>
                    </div>
                    <div className="job-desc-1">
                        <p>Learn English</p>
                    </div>
                    <div className="job-desc-2">
                        <div>
                        <span>Level A1 & A2</span><br/>
                        <span>Level B1 & B2</span><br/>
                        <span>Level C1 & C2</span>
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
export default lancou;