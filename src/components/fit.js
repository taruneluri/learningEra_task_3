import React from "react";
import './fit.css';
import six from './6.jpeg'
const fit=()=>{
    return(
    <div className="fit-main">
        <div className="fit-a">
            <p>Our Courses are fit for</p>
            <img src={six}></img>
        </div>
        <div className="fit-b">
            <div>
                <button>Fresh Graduates (Any Stream)</button><button>For Career Trasformation</button><br/>
                <button>Housewives & Retired</button><button>For Entrepreneurs</button><br/>
                <button>CA/ CFA/ CS/ MBA</button><button>For Job Seeker</button>
            </div>
        </div>

    </div>
    )
}
export default fit;