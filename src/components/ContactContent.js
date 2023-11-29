import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import VenmoLogo from '../assets/img/venmo2.png'
import PayPalLogo from '../assets/img/paypal2.png'
import FacebookLogo from '../assets/img/facebook.png'
import InstaLogo from '../assets/img/instagram.png'
import TwitterLogo from '../assets/img/twitter.png'

function Contact() {
    return(
        <div>
            <div className="donate">
                <p className="card-title">Donate</p>
                <p className="card-content">Support the creator Mark Angel</p>

                <div className="payment">
                    <a href="https://venmo.com/mark-angel-13" target="_blank">
                        <img id="venmo-img" src={VenmoLogo}/>
                    </a>

                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input id="paypal-img" type="image" src={PayPalLogo}  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>
                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        <input type="hidden" name="business" value="2P763EY3S58N6" />
                        <input type="hidden" name="item_name" value="Health Education" />
                        <input type="hidden" name="currency_code" value="USD" />
                    </form>
                </div>
            </div>
            <div class="contact-footer">
                <div class="footer-left">
                    <p class="footer-title">Let's Get in Touch <br/>markangelhealingarts@gmail.com</p>
                    
                    <p class="follow">Follow us on:</p>
        
                    <div class="social-media">
                        <a href="https://www.facebook.com/499getupandmove/" target="_blank">
                            <img class="facebook-img" src={FacebookLogo}/>
                        </a>
                        <a href="https://www.instagram.com/"  target="_blank">
                            <img class="instagram-img" src={InstaLogo}/>
                        </a>
                        <a href="https://twitter.com/?lang=en" target="_blank">
                            <img class="twitter-img" src={TwitterLogo}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;