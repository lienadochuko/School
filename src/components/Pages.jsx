import React from "react";
import living from '../assets/living gate logo1.png';
import stud from '../assets/LGCSstudents1.png';
import { useNavigate } from "react-router-dom";
import "./pages.css";


const Pages = () => {

    let navigate = useNavigate();

    const handleSubmit1 = () => {
            navigate("/");
        }
    const handleSubmit2 = () => {
                navigate("/fees");
        }
    const handleSubmit3 = () => {
                navigate("/sched");
        }
    const handleSubmit4 = () => {
                navigate("/parents");
        }
    const handleSubmit5 = () => {
                navigate("/news");
        }
    const handleSubmit6 = () => {
            navigate("/about");
    };

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const timer = new Date().toLocaleTimeString();

return(
    <div className='p'>
        <div className="p-aclone"></div>
        <div className="p-a">
        <img src={living} alt="logo" className="p-img" />
        <div className="p-ab">
                <p onClick={handleSubmit1} className="p-abp" 
                style={{ color:"rgb(48, 167, 232)"}}>HOME</p>
                <p onClick={handleSubmit2} className="p-abp">FEES</p>
                <p onClick={handleSubmit3} className="p-abp">SCHEDULE</p>
                <p onClick={handleSubmit4} className="p-abp">CONTACT US</p>
                <p onClick={handleSubmit5} className="p-abp">NEWS</p>
                <p onClick={handleSubmit6} className="p-abp">ABOUT</p> 
        </div>
        </div>
        <div className="p-a1"><p className="p-t">Today's Date - {date} <br />
       Time - {timer}</p></div>
        <div className="p-wrapper">
        <div className="p-left">
            <div className="p-intro">
            <p className="p-title">Expierence Standard Education</p>
            <div className="p-body">
                <p className="p-text">
                 Living Gate Classic School is a place where lorem ipsum.
                 Our mission is to provide world-class education
                 to children. We inculcate high moral and ethical 
                 values in our students as we prepare them for 
                 lifelong learning, service and fulﬁllment.

                </p>
                <p className="p-man">-Management Desk</p>
            </div>
            </div>
        </div>
        <div className="p-right">
        <img src={stud} alt="school-pic" className="p-iri" />
        </div>
        </div>
        <div className="p-footer">
        <div className="p-aclone1">
        <p className="p-p">Copyright All Right Reserved 2022, Living Gate Classic Schools Nigeria</p>
        </div>
        </div>
        </div>
      );
};

  export default Pages;