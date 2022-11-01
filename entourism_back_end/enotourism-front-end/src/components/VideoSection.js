import React from "react";
import "../App.css";
import './VideoSection.css';
import v from './videos/pexels-roman-odintsov-5666723.mp4';

function VideoSection(){

    return(
        <div className='video-container'>
            { <video src={v} autoPlay loop muted /> }
            <h1>WINERIES AWAITS</h1>
            <p>Check our offer now</p>
        </div>
    );
}

export default VideoSection;