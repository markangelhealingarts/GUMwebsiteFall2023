import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import GUM_slideshow from '../assets/img/GUM_Orientation.png';

function Homepage_content() {
  const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-around p-4'>
        <div className="w-1/4 max-w-200px" id="intro-video">
          <iframe src="https://www.youtube.com/embed/frFlcZ1Xnno" id="video" allowFullScreen></iframe>
        </div>
        <div id="intro-info m-4">
          <h1 id="intro-header">What is Get Up and Move?</h1>
          <div id="intro">Get Up and Move is a program that will encourage you to be a little more active throughout your day.</div>
          
          <Button label="Read more here" onClick={() => setMoreInfoOpen(true)}/>
          <Button label="Disclaimer" onClick={() => setDisclaimerOpen(true)}/>

          <Modal isOpen={isMoreInfoOpen} onRequestClose={() => setMoreInfoOpen(false)} contentLabel="More Info">
            <h5>More about Get Up and Move</h5>
            <div className="modal-body">
              Nearly everyone comes to a point in their life (early or late and often during mid-age) where they realize they suffer from one or more chronic challenges that are the result of injury, illness, stress, emotional distress, and/or less-than-optimal attitudes, belief systems or habitual behaviors. A preponderance of evidence shows that siting too much contributes significantly to disease, and is a cofactor in workplace injury. In a meta-analysis of 47 articles (selected from nearly 21,000 studies related to the topic), Biswas (2015) found that there is a significant correlation between prolonged sedentary behavior and comorbidity factors for cardiovascular disease, diabetes, obesity, musculoskeletal disorders, and several other disabling conditions. There is compelling evidence that sitting less than an hour at a time and fewer than four hours throughout the work-day significantly decreases associated comorbidity factors. Additionally, by simply standing and changing posture while working at a desk, one can increase caloric burn by up to 2Kcal/min through Non‐Exercise Activity Thermogenesis (Levine, 2004). Biswas (2015) concluded that additional evidence shows that exercising after work will not significantly reverse the damage caused by sitting too much throughout the day. But there is good news, the simple act of standing up and moving around within the workspace for a few minutes every half-hour to hour can minify many of the harmful effects of sitting (Buckly, 2015).TERM PAPER stuff
              <br/><br/>
              <b>Solution:</b> Get Up and Move! is a comprehensive set of scientifically proven movements, meditations and attitudes taken from the best practices in Taoist (ancient Chinese) Taiji and Qigong tradition, modern physical therapy, Yoga, and other Eastern and Western methodologies. This solution is delivered through a mostly fixed set of movements, exercises and meditations (forms) that the student at first follows along with and ultimately masters. The explanations given while practicing help students relate the movements to physical, emotional and/or psychological or emotional challenges they may encounter throughout life. Get Up and Move involves exercise, meditation, and lifestyle modifications developed to help people move more, more regularly, and in more beneficial ways. Traditional Chinese martial arts and healing exercises are the foundation of the program. These ancient Taoist practice from China helps improve the flow of life force energy (Qi), and thus offers greater health and longevity to the practitioner. In Western terms, practicing this gentle repetitive movement helps improve circulation, balance, mobility, and strength, while reducing stress, fatigue, and stagnation. Qigong activities are a healing practice that can be traced back over 5,000 years in ancient Chinese culture. In modern times, studies done in both the East and the West show that multiple categories of benefits are derived by practicing this art. Some of the categories of benefits studied are: bone density, cardiopulmonary effects, physical function, balance, fall prevention and related risk factors, quality of life, self-efficacy, patient reported outcomes, psychological symptoms, and immune- and inflammation-related responses (Jahnke, et al., 2010)Buttons for each subordinate pageIntro videoAccording to the U.S. Bureau of Labor Statistics, people most at risk for sitting too much are in jobs such as software developers, bus drivers, long-haul truck drivers, accountants, lawyers, engineers, and EMTs and Paramedics, just to mention a few. The pandemic has thrown many others into the mix. With distance learning, teachers and students became mostly sedentary as well. Get Up and Move
            </div>
            <Button label="Close" onClick={() => setMoreInfoOpen(false)}/>
          </Modal>

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
      </div>
      <div>
        <a href="GUM/GUM_Orientation/index.html" target="_blank">
          <img className="w-1/4 max-w-200px" alt="Get up and move orientation course" src={GUM_slideshow} id="gum-orientation-logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Homepage_content;
