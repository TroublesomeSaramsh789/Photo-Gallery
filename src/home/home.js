import React from 'react';
import './home.css';
const Intro = () => {
    return(
        <div id="start" className="home">
        <div className="nav-bar">
        <a href="#start"><h2>Home</h2></a>
        <a href="#gallery"><h2>Gallery</h2></a>
        <a href="#slider"><h2>Slider</h2></a>
        </div>
        
        <div >
        <h1 className="text-photo">Photo</h1>
            <h1 className="text-gallery">Gallery</h1>
            <div className="background-box"></div>
            <h2 className="text-author"> - By Saramsh Shrestha</h2>
        </div>
            <a href="#start"><div className="stick"><p>Back To Top</p></div></a>
        </div>
    )
}
export default Intro;