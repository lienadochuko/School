import React from 'react';
import "./about.css";
import living from '../assets/living gate logo1.png';
import { useNavigate } from 'react-router-dom';
import Load from './Load';
import Loadcopy from './Load copy';

const About = () => {
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
    <div className='a'>
        <div className="a-a">
        <img src={living} alt="logo" className="a-img" />
        <div className="a-ab">
                <p onClick={handleSubmit1} className="a-abp">HOME</p>
                <p onClick={handleSubmit2} className="a-abp">FEES</p>
                <p onClick={handleSubmit3} className="a-abp">SCHEDULE</p>
                <p onClick={handleSubmit4} className="a-abp">CONTACT US</p>
                <p onClick={handleSubmit5} className="a-abp">NEWS</p>
                <p onClick={handleSubmit6} className="a-abp" style={{ color:"rgb(48, 167, 232)"}}>ABOUT</p>
        </div>
        <div className="a-a1"><p className="p-t">Today's Date - {date} <br />
       Time - {timer}</p></div>
        </div>
        <div className='a-main'>
        <div className="a-coq">
        <p className="a-title1"> Get to know us Better</p>
        <p className="a-title">About Us</p>
        </div>
        <div className="a-wrapper">
        <div className="a-left">
            <div className="a-intro">
                <p className="a-text">
                 Living Gate Classic School (LGCS) which was founded on
                 the belief that Education is the best legacy
                  is a rising star which is designed to mold the characters
                  , teach of students, while set moral standard in other
                  not just to raise capable future leaders but also principled 
                  leaders who have a moral standard. We combine theoretical
                   and vocational teaching along with practical applications of
                    said lessons. The aim is to build true world Class Stuents 
                    and pupils capable of outpacing their peers. 
                </p>
            </div>
        </div>
        <div className="a-right">
        <div className='a-iri'>
            <p className='a-iri-text'> Living Gate Classic <br/> School's
            History</p>
        </div>
        <div className='a-iri2'>
            <p>Living Gate Classic School (LGCS)</p>
        </div>
        <div className='a-iri3'>
            <p>sdfh</p>
        </div>
        </div>
        </div>
        </div>
        <Load />
        <Loadcopy />
        </div>
      );
}

//border-bottom: 1px solid rgb(180, 42, 42);;
export default About;
