import React from "react";
import './busori.css';
import three from './3.jpg';
import four from './4.jpg';
const busori=()=>{
    return(
        <div className="busori-main">
            <div className="busori-heading">
                <p>Business Oriented Courses</p>
            </div>
            <div className="busori-sub">
                <div className="busori-sub-1">
                    <div className="busori-img">
                        <img src={three}></img>
                    </div>
                    <div className="busori-sub-heading">
                        <p>Market Expert</p>
                    </div>
                    <div className="busori-sub-heading-2">
                        <p>Course Duration: 3 Months</p>
                    </div>
                    <div>
                    <button className="job-btn-1">Brochure</button><button className="job-btn-2">Register</button>
                    </div>
                </div>
                <div className="busori-sub-1">
                <div className="busori-img">
                        <img src={four}></img>
                    </div>
                    <div className="busori-sub-heading">
                        <p>Yogic Science with Naturopathy</p>
                    </div>
                    <div className="busori-sub-heading-2">
                        <p>Course Duration: 3 Months</p>
                    </div>
                    <div>
                    <button className="job-btn-1">Brochure</button><button className="job-btn-2">Register</button>
                    </div>
                </div>
    
            </div>
        </div>
    )
}
export default busori;