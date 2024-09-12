import React from "react";
import Footer from '../../navigation/Footer';
import { Link } from "react-router-dom";
/* import { useState,useEffect } from "react"; */
const Learn = () => {
  //fetch tips to display
  /* const [tips,settips]=useState({})
  useEffect(()=>{
    fetch('')
    .then(res=>res.json())
    .then(data=>settips(data))
  },[tips]) */
  return (
    <div className="learn-page">
      <div className="learn-suggestions">
        Good To Know
        <Link to='/details'>Details</Link>
      </div>
      <div className="learn-tips">
        Tips for you
        <Link to='/details'>Details</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Learn;
