import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button'

function Privacy_Policy() {
    const headstyle={
        fontSize: '22px',
        textAlign: 'center',
      }
    const style4={textAlign:'center'}
    return(
        <div className='policy'>
          
            <h1 id="policy_header" style= {headstyle} >Privacy Policy of Get Up and Move</h1>
            <br/>
            <div style={style4}>Get Up and Move operates this website, which provides users with various exercise activities. This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our service, the Get Up and Move website. If you choose to use our service, then you agree to the collection and use of information in relation with this policy. The personal information that we collect are used for providing and improving the service. We will not use or share your information with anyone except as described in this privacy policy. The terms used in this privacy policy have the same meanings as in our Terms and Conditions, which is accessible at https://getupandmove.net/, unless otherwise defined in this privacy policy.
            <br/>
            <h2>Information Collection and Use </h2>
            <br/>
            <div style={style4}>For a better experience while using our service, we require you to provide us with your email. The information that we collect will be used to contact or identify you.</div>
            <br/>
            <h2>Log Data</h2>
            <br/>
            <div style={style4}>We want to inform you that whenever you visit our service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information pages of our service that you visit, the time and date of your visit, and other statistics.</div>
            <br/>
            <h2>Security</h2>
            <br/>
            <div style={style4}>We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</div>
            <br/>
            <h2>Links to Other Sites</h2>
            <br/>
            <div style={style4}>Our Service may contain links to other sites operated by Mark Angel Healing Arts.</div>
            <br/>
            <h2>Changes to This Privacy Policy</h2>
            <br/>
            <div style={style4}>We may update our privacy policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</div>
            <br/>
            <h2>Contact Us</h2>
            <br/>
            <div style={style4}>If you have any questions or suggestions about our privacy policy, do not hesitate to contact us at markangelhealingarts@gmail.com</div>
            </div>
        </div>
    );
}

export default Privacy_Policy;