import React from 'react'
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    return (
        <div>

            <div class="footer-dark" id='footer'>
                <footer>
                    <div class="container">
                        <div class="row"><div class="col-md-3 item">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="#">+91 12345677</a></li>
                                <li><a href="#">+91 98765432</a></li>
                                <li><a href="#">+91 19283745</a></li>
                            </ul>
                        </div><div class="col-md-3 item">
                                <h3>Locations</h3>
                                <ul>
                                    <li><a href="#">Mumbai</a></li>
                                    <li><a href="#">Pune</a></li>
                                    <li><a href="#">Delhi</a></li>
                                </ul>
                            </div><div class="col-md-3 item">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="/events">Explore</a></li>
                                    <li><a href="/community">Community</a></li>
                                    <li><a href="/wishlist">Account</a></li>
                                </ul>
                            </div><div class="col-md-3 item text">
                                <h3>Safari.com</h3>
                                <p>A journey of thousand miles begins with a single step.</p>
                            </div>
                            <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-google"></i></a></div>
                        </div>
                        <p class="copyright">Safari.com &copy; 2020</p>
                    </div>
                </footer>
            </div>

        </div>
    );
}

export default Footer