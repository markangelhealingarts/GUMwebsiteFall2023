import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button'

function Tutorial() {
    const [isOpen1, oneIsOpen] = useState(false);
    const toggleDropdown1 = () => oneIsOpen(!isOpen1);
    const [isOpen2, twoIsOpen] = useState(false);
    const toggleDropdown2 = () => twoIsOpen(!isOpen2);
    const [isOpen3, threeIsOpen] = useState(false);
    const toggleDropdown3 = () => threeIsOpen(!isOpen3);
    const [isOpen4, fourIsOpen] = useState(false);
    const toggleDropdown4 = () => fourIsOpen(!isOpen4);
    const [isOpen5, fiveIsOpen] = useState(false);
    const toggleDropdown5 = () => fiveIsOpen(!isOpen5);
    const [isOpen6, sixIsOpen] = useState(false);
    const toggleDropdown6 = () => sixIsOpen(!isOpen6);
    return(
        <div>
            <h1 class=" text-center , font-bold">How to Get Up and Move</h1>
            <h2 class=" text-center , font-semibold">by Mark Angel</h2>
            <div className="relative inline-block text-center w-full">
                <Button label={'Step 1: Recognize that regular movement is essential to your health'} onClick={toggleDropdown1} additionalClasses='w-full'></Button>
                {isOpen1 && (
                    <div>
                        “Sitting is the new smoking,” a quote attributed Dr. James Levine of the Mayo Clinic, is now a popular catchphrase. In his 2014 interview with the L.A. Times, he went on to say: "Sitting is more dangerous than smoking, kills more people than HIV and is more treacherous than parachuting. We are sitting ourselves to death" (Macvean, 2014). Although determining which is worse has been debated, the comparison to smoking is apt because like smoking, people first choose to sit excessively, and then it becomes a life-long habit. Also like smoking, no matter how much exercise you do before or after long stints of sitting, it won’t reverse all the damage done by hours of sitting every day.
                    </div>
                )}
                <Button label={'Step 2: Select Level of Intensity'} onClick={toggleDropdown2} additionalClasses='w-full'></Button>
                {isOpen2 && (
                    <div>
                        The GUM App provides for Three Different Levels of Intensity. Each person must select the one that will work best for themselves. I recommend selecting Level 1 first and working up from there as you see fit.<br/>Easy<br/>Moderate<br/>Vigorous
                    </div>
                )}
                <Button label={'Step 3: Try these movements'} onClick={toggleDropdown3} additionalClasses='w-full'></Button>
                {isOpen3 && (
                    <div>
                        Next you can follow along with some Exercises that have been carefully considered to improve balance, circulation, strength and mobility.<br/>Bouncing<br/>Shaking<br/>Counter Swings
                    </div>
                )}
                <Button label={'Step 4: Bouncing'} onClick={toggleDropdown4} additionalClasses='w-full'></Button>
                {isOpen4 && (
                    <div>
                        Bouncing is a great exercise that helps build bone mass and bone strength by providing a gentle compression and weight bearing movement for the bones as well as warm up muscles and joints.
                    </div>
                )}
                <Button label={'Step 5: Shaking'} onClick={toggleDropdown5} additionalClasses='w-full'></Button>
                {isOpen5 && (
                    <div>
                        The Shaking exercise is excellent to help you learn to relax your whole body while still in the standing position by shaking out and wiggling and jiggling all the muscles of the body.
                    </div>
                )}
                <Button label={'Step 6: Counter Swings'} onClick={toggleDropdown6} additionalClasses='w-full'></Button>
                {isOpen6 && (
                    <div>
                        The Counter Swing exercise is a gentle twisting exercises that warms up the spine and helps to circulate cerebral spinal fluid and blood as well as get the core trunk muscles loosened up.
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tutorial;