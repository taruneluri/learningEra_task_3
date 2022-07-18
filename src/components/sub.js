import React from "react";
import email from "emailjs-com";
import './fit.css';
const Sub=()=>{
    function sendEmail(e){
        e.preventDefault();
        email.sendForm('service_vdq4y6m','template_u0ly6qa',e.target,'EU0htnM3JgOxm5ge9').then(res=>{
            console.log("Sucess");
        }).catch(err=>console.log(err));

    }
    return(
    <>
        <div className="container-fluid">
            <div className="row" style={{height:"250px",background:"lightblue"}}>
                <div className="col-md-6 offset-md-3 sub">
                    <h3 style={{color:"red"}}>Subscribe To LearningEra</h3>
                    <form onSubmit={sendEmail}>
                        <input type={"text"} name="name" className="form-control" placeholder="Name" />
                        <input type={"email"} name="umail" className="form-control"  placeholder="Email" ></input><br/>
                        <button className="btn btn-danger" type="Submit">Subscribe</button>
                    </form>


                </div>
            </div>
        </div>
    </>
    )
}
export default Sub;