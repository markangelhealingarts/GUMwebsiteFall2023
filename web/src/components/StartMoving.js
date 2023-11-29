import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Start_Moving() {
  const navigate = useNavigate(); // Initialize the hook
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);
  
  const linkStyle = {
    color: 'green',  
    textDecoration: 'underline', 
    fontWeight: 'bold'
  };

  const headstyle={
    fontSize: '22px',
    textAlign: 'center',
  }

   const style4={textAlign:'center'}

  return(
    <div className='move'>
      <div id="moving">
        <h1 id="moving_header" style= {headstyle} >Start Moving!</h1>
        <br/>
        <div id="move m-4" style={style4}>Each of the following activities is demonstrated at three levels of intensity based on a participants general physical capabilities: Easy, Moderate, Vigorous.
        <br/>
        Please go to <a href="https://getupandmove.net/pages/how_to.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>How to Get Up and Move</a> for a brief overview of this program.
        <br/><br/>
        <Button label="Disclaimer" onClick={() => setDisclaimerOpen(true)}/>

        </div>
    
        <Modal isOpen={isDisclaimerOpen} onRequestClose={() => setDisclaimerOpen(false)} contentLabel="Disclaimer">
          <h2>Fitness and Exercise Disclaimer</h2>
              <div className="modal-body">
                The purpose of this DISCLAIMER AND NOTICE is to make you aware of the potential risks connected with activity in any exercise, physical fitness or training program. It is also to help you make an informed decision as to whether or not you should participate in Get Up and Move and the activities associated with it. 
                <br/><br/>
                <b>DISCLAIMER OF LIABILITY</b> 
                <br/><br/>
                Injuries of all types can occur when participating in exercise, physical fitness and training programs, hence Get Up and Move strongly encourages all users to obtain a comprehensive physical examination by a licensed physician BEFORE undertaking any exercise or training demonstrated on this website, and/or any of videos, MP4s, MP3s and training materials offered on this website. If you choose to participate in any of the Get Up and Move program or any associated program, you fully assume the risk of any resulting injury. Such injuries include but are not limited to: Bruising, cuts and general soreness Muscle and tendon injuries Ligament and skeletal injuries Fractured or broken bones Concussions Heart attack 
                <br/><br/>
                <b>GET UP AND MOVE DISCLAIMS ANY LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY LOSS, INJURY OR DAMAGE SUFFERED BY ANY PERSON AS A RESULT OF THE USE OR MISUSE OF ANY INFORMATION, VIDEOS, MPSs OR TRAINING MATERIALS MADE AVAILABLE ON THIS WEBSITE.</b> 
                <br/><br/>
                In consideration of performing or participating in these types of activities, you hereby agree to indemnify and hold harmless Mark C. Angel and other associated with developing the Get Up and Move program, and its officers, directors, and agents, and their respective successors and assigns, against any loss, liability, damage, cause of action, cost, or expense of any nature whatsoever, including without limitation reasonable attorneys’ fees and other legal costs, even if said injuries or losses are the direct result of our negligence. The content, information, videos, MP4s, MP3s and training materials offered and made available on this website are for informational purposes only. 
                <br/><br/>
                <b>USE THIS PROGRAM AND ALL INFORMATION CONTAINED WITHIN IT AT YOUR OWN RISK</b>
              </div>
              <Button label="Close" onClick={() => setDisclaimerOpen(false)}/>
        </Modal>
      </div>

      <div> 
        <br/> <h1 style={headstyle}>Guiding Videos</h1>
      </div>

      <div style={style4}>
        <Button label="Easy" onClick={() => navigate('/easy')}/>
        <Button label="Moderate" onClick={() => navigate('/moderate')} />
        <Button label="Vigorous" onClick={() => navigate('/vigorous')} />
      </div>

      <div> 
        <br/> <h1 style={headstyle}>Teaching Videos</h1>
      </div>

      <div style={style4}>
        <Button label="Easy" onClick={() => navigate('/easyTeaching')}/>
        <Button label="Moderate" onClick={() => navigate('/moderateTeaching')} />
        <Button label="Vigorous" onClick={() => navigate('/vigorousTeaching')} />
      </div>
      
    </div>
  );
}

export default Start_Moving;
