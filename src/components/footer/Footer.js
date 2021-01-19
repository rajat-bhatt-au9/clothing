import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
const Footer = () => {
    return(

        <footer className='footer'>
            <div className="main-content">
                <div className="left box">
                    <h2 className='head2'>About us</h2>
                    <div className="content">
                        <p> We are a family of brands, driven by our desire to make great
                        design available to everyone in a sustainable way. Together we
                        offer fashion, design and services, that enable people to be inspired
                        and to express their own personal style, making it easier to live
                        in a more circular way.</p>
                            <div className="social">
                            <Link to='#'><span className="fab fa-facebook-f"></span></Link>
                            <Link to="#"><span className="fab fa-twitter"></span></Link>
                            <Link to='#'><span className="fab fa-instagram"></span></Link>
                            </div>
                    </div>
                </div>

                <div className="center box">
                    <h2>Address</h2>
                        <div className="content">
                            <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">#7, Garhi Cantt Dehradun</span>
                            </div>
                            <div className="phone">
                            <span className="fas fa-phone-alt"></span>
                            <span className="text">+91-5653904342</span>
                            </div>
                            <div className="email">
                            <span className="fas fa-envelope"></span>
                            <span className="text">abc@example.com</span>
                            </div>
                        </div>
                </div>

                <div className="right box">
                    <h2>Contact us</h2>
                    <div className="content">
                        <form action="#">
                        
                        <div className="btn">
                            <button type="submit" onClick={()=> {window.open("mailto:rajatbhatt500@gmail.com")}}>Send Us Email</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <center>
                    <span className="credit">Created By <Link to="/"> Clothing E-com </Link> | </span>
                    <span className="far fa-copyright"></span>
                    <span> 2021 All rights reserved.</span>
                </center>
            </div>
        </footer>

    )
}

export default Footer;