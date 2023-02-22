import React from 'react';
import fb from '../image/fb.png';
import lin from '../image/lin5.png';
import git from '../image/git.png';

function Footer() {
    return(
        <div id="footer">
        <footer>
            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">Connect With Us</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus earum non molestias suscipit</p>
            <a href="https://www.facebook.com/profile.php?id=100004114697134"><img src={fb} alt="social media" height="50px" width="50px" /></a>
            <a href="https://github.com/AnasurRehman"><img src={git} alt="social media" height="50px" width="50px" style={{backgroundColor: '#FFFFFF'}} /></a>
            <a href="https://www.linkedin.com/in/uranas/"><img src={lin} alt="social media" height="50px" width="50px" /></a>
            </div>
            </div>

        <div><br /><br />
            <p id="rights">All rights reserved | This template is made by Aureh.</p><br />
        </div>
        </footer>
    </div>
);
}
export default Footer;