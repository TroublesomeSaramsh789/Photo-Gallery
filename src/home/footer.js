import React from 'react';
import './footer.css';
function footer () {
    return(
        <div className="footer">
        <div className="contact">
            <h2 className='bold'>Contact:</h2>
                <ul>
                <li><a target ="blank" id='facebook' href="https://www.facebook.com/profile.php?id=100011637709886"><h3>Facebook</h3></a></li>
                <li><a target ="blank" id="github" href="https://github.com/TroublesomeSaramsh789"><h3>Github</h3></a></li>
                <li><a target ="blank" id="instagram" href="https://www.instagram.com/saramshtroublesome/?hl=en"><h3>Instagram</h3></a></li>
                </ul>                
            </div>
        <div className="info">
        <h2 className='bold'> Saramsh Troublesome</h2>
            <h3>All Copyrights© Are Reserved . </h3>
        </div>
        </div>
    );
}
export default footer;