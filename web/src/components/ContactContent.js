import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';

function Contact() {
    return(
        <div class="donate">
        <p class="card-title">Donate</p>
        <p class="card-content">Support the creator Mark Angel</p>

        <div class="payment">
            <a href="https://venmo.com/mark-angel-13" target="_blank">
                <img id="venmo-img" src="../img/venmo2.png"/>
            </a>

            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                <input id="paypal-img" type="image" src="../img/paypal2.png"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>
                <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                <input type="hidden" name="business" value="2P763EY3S58N6" />
                <input type="hidden" name="item_name" value="Health Education" />
                <input type="hidden" name="currency_code" value="USD" />
            </form>
        </div>
        </div>
    );
}
export default Contact;