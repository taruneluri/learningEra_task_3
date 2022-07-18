import React from 'react';
import logo from './1.png';
import './header.css'
const header=()=>{
    return(
        <div>
            <div className='top'>
                <p>Patner with us | Become an instructor | Online Payement</p>
            </div>
            <div className='nav-bar'>
                <div className='icon-div'>
                <img src={logo} className='icon' ></img>
                </div>
                <div className='nav-items'>
                    <a>Home</a>
                    <a>Courses</a>
                    <a>Language Course</a>
                    <a>Tutorials</a>
                </div>
            </div>
        </div>
    )
}
export default header;