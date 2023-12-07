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
                <h1 className="card-title" class=" text-center , font-bold">Donate</h1><br/>
                <h2 class=" text-center , font-semibold">Support the creator Mark Angel</h2><br/>
                <div className="payment" class="flex items-center justify-center">
                    <a href="https://venmo.com/mark-angel-13" target="_blank">
                        <img id="venmo-img" className="h-32 w-32 h-32" src={VenmoLogo}/>
                    </a>
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input id="paypal-img" type="image" className="h-39 w-32 h-32" src={PayPalLogo}  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>
                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" />
                        <input type="hidden" name="business" value="2P763EY3S58N6" />
                        <input type="hidden" name="item_name" value="Health Education" />
                        <input type="hidden" name="currency_code" value="USD" />
                    </form>
                </div>
            </div><br/>
            <div >
                <div class="footer-left">
                    <h2 class=" text-center , font-semibold">Let's Get in Touch </h2><br/>
                    <div class=" text-center">markangelhealingarts@gmail.com</div><br/>
                    <h2 class=" text-center , font-semibold">Follow us on:</h2>
                    <div className="social-media" class="flex items-center justify-center">
                        <a href="https://www.facebook.com/499getupandmove/" target="_blank">
                            <img class="facebook-img" className="h-32 w-32 h-32" src={FacebookLogo}/>
                        </a>
                        <a href="https://www.instagram.com/"  target="_blank">
                            <img class="instagram-img" className="h-32 w-32 h-32" src={InstaLogo}/>
                        </a>
                        <a href="https://twitter.com/?lang=en" target="_blank">
                            <img class="twitter-img" className="h-32 w-32 h-32" src={TwitterLogo}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;