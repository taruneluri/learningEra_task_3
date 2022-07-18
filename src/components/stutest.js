import React from "react";
import './fit.css';
import jyo from './jyo.jpeg';
import vysh from './vish.jpeg';
import aman from './aman.jpeg';
const stutest=()=>{
    return(<>
        <div className="stutest-main">
            <div className="stutest-heading">
                <p>Student Testimonial</p>
            </div>
            <div className="stutest-stu">
                <div className="stutest-a">
                    <div>
                    <span>I have learned more about</span><br></br>
                    <span>financing after one month of</span><br></br>
                    <span> joining this course than these past</span><br></br>
                    <span> years. Great course and faculty.</span>
                    </div><br/><br/>
                    <img src={jyo}></img>
                    <h3>Jyothika</h3>
                </div>
                <div className="stutest-b">
                <div>
                    <span>I am finally being able to</span><br></br>
                    <span>understand the importance of</span><br></br>
                    <span>finance management in my day to</span><br></br>
                    <span>day life and I have even helped out</span><br></br>
                    <span>my relatives and friends. Some of</span><br></br>
                    <span>them are even part of this course</span><br></br>
                    <span>and very happy with it.</span>
                    </div><br/><br/>
                    <img src={vysh}></img>
                    <h3>Vishal</h3>

                </div>
                <div className="stutest-c">
                <div>
                    <span>I have been very lucky to land</span><br></br>
                    <span>myself with such an amazing team</span><br></br>
                    <span>of learning era.. Highly</span><br></br>
                    <span>recommended course..</span>
                    </div><br/><br/>
                    <img src={aman}></img>
                    <h3>Aman</h3>
                </div>
            </div>
        </div>
    </>)
}
export default stutest;