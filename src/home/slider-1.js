import React from "react";
import './slider.css';
import Right from '../images/buttonRight.svg';
import Left from '../images/buttonLeft.svg';

function mainComponent(prop) {
    return (
        <div id="slider" className="slider-body">
            <div className="imageSlider"><img src={prop.img} alt=""/></div>
            <div className="control">
                <div className="button" onClick={prop.prev} id="prev"><img src={Left} alt=""/></div>
                <div className="button" onClick={prop.next} id="prev"><img src={Right} alt=""/></div>
            </div>
        </div>
    )
}
export default mainComponent;