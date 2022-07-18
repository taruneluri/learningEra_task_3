import React , {useState} from "react";
import './fit.css';
import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t4 from './t4.jpg';
export default function Modal(){
    const [modal,setModal]=useState(false);
    const toggleModal =()=>{
        setModal(!modal);
    };
    if(modal){
        document.body.classList.add("active-modal");
    }
    else
    {
        document.body.classList.remove('active-modal');
    }
    return(<>
    <button onClick={toggleModal} className="btn-modal">Tutorials (K-12) </button>
    {
        modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <button className="close-modal" onClick={toggleModal}>X</button>
                <div className="tu-main">
                    <div className="tu-main-sub">
                        <div><img src={t1}></img></div>
                        <div className="tu-main-sub-heading">
                            <span>Physics/ Chemistry/ Maths/</span><br/>
                            <span>Bio</span><br/>
                            <span>Grade 11</span>
                        </div>
                        <div className="tu-main-sub-con">
                            <span>Choose any 2</span><br/>
                            <span>Comination Courses</span><br/>
                            <span>ICSE and CBSE</span>
                        </div>
                        <div className="tu-main-sub-banner">
                            <span>₹35/Day</span>
                        </div>
                        <div>
                            <button className="tu-btn-1">Broucher</button><button className="tu-btn-2">Register</button>
                        </div>

                    
                    </div>
                    <div  className="tu-main-sub">
                    <div><img src={t2}></img></div>
                        <div className="tu-main-sub-heading">
                            <span>Physics/ Chemistry/ Maths/</span><br/>
                            <span>Bio</span><br/>
                            <span>Grade 12</span>
                        </div>
                        <div className="tu-main-sub-con">
                            <span>Choose any 2</span><br/>
                            <span>Comination Courses</span><br/>
                            <span>ICSE and CBSE</span>
                        </div>
                        <div className="tu-main-sub-banner">
                            <span>₹35/Day</span>
                        </div>
                        <div>
                            <button className="tu-btn-1">Broucher</button><button className="tu-btn-2">Register</button>
                        </div>
                    </div>
                    <div  className="tu-main-sub">
                    <div><img src={t3}></img></div>
                        <div className="tu-main-sub-heading">
                            <span>Business Studies/</span><br/>
                            <span>Accountancy/ English</span><br/>
                            <span>Grade 11</span>
                        </div>
                        <div className="tu-main-sub-con">
                            <span>Choose any 2</span><br/>
                            <span>Comination Courses</span><br/>
                            <span>ICSE and CBSE</span>
                        </div>
                        <div className="tu-main-sub-banner">
                            <span>₹35/Day</span>
                        </div>
                        <div>
                            <button className="tu-btn-1">Broucher</button><button className="tu-btn-2">Register</button>
                        </div>
                    </div>
                    <div  className="tu-main-sub">
                    <div><img src={t4}></img></div>
                        <div className="tu-main-sub-heading">
                            <span>Business Studies/</span><br/>
                            <span>Accountancy/ English</span><br/>
                            <span>Grade 12</span>
                        </div>
                        <div className="tu-main-sub-con">
                            <span>Choose any 2</span><br/>
                            <span>Comination Courses</span><br/>
                            <span>ICSE and CBSE</span>
                        </div>
                        <div className="tu-main-sub-banner">
                            <span>₹35/Day</span>
                        </div>
                        <div>
                            <button className="tu-btn-1">Broucher</button><button className="tu-btn-2">Register</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        )
    }
        
    </>)
}