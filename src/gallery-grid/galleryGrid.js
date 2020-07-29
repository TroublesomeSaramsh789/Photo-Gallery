import React from 'react';
import './galleryGrid.css';
function Grid(prop) {
    return (
        
        <div className="page2" id="gallery">
        <h1 className="title">Photographs</h1>
        <div className="container">
            <div className="gallery1">
                <div className="grid1 grid"><a target ="blank" href={prop.image[0]}><img src={prop.image[0]} alt="Landslide"/></a></div>
                <div className="grid2 grid"><a target ="blank" href={prop.image[1]}><img src={prop.image[1]} alt="Road and Green Hill"/></a></div>
                <div className="grid3 grid"><a target ="blank" href={prop.image[2]}><img src={prop.image[2]} alt="Sky"/></a></div>
                <div className="grid4 grid"><a target ="blank" href={prop.image[3]}><img src={prop.image[3]} alt="Tree on Foggy Day"/></a></div>
            </div>
            <div className="gallery2 ">
                <div className="grid1 grid"><a target ="blank" href={prop.image[4]}><img src={prop.image[4]} alt="Person"/></a></div>
                <div className="grid2 grid"><a target ="blank" href={prop.image[5]}><img src={prop.image[5]} alt="Sky wih beautiful Clouds" /></a></div>
                <div className="grid3 grid"><a target ="blank" href={prop.image[6]}><img src={prop.image[6]} alt="Sky"/></a></div>
                <div className="grid4 grid"><a target ="blank" href={prop.image[7]}><img src={prop.image[7]} alt="Rainbow"/></a></div>
            </div>
        
        </div>
        </div>
    )
}
export default Grid;