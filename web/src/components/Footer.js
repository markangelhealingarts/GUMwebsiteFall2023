// src/components/Footer.js
import React from 'react';
import applestorelogo from "../assets/img/applestore.png"
import playstorelogo from "../assets/img/google-play-badge-logo-png-transparent.png";

function Footer() {
    const videoSections = [
        {
            header: "Easy Guiding Videos",
            links: [
                "HLVORLKgbG0",
                "khRNGR_nRZM",
                "0jBrAwQxxFo",
                "woWyNX5kyDA",
                "1zUxn6P6cGE",
                "4mPcd83f1ws"
            ],
            labels: [
                "Level 1: Session 1",
                "Level 1: Session 2",
                "Level 1: Session 3",
                "Level 1: Session 4",
                "Level 1: Session 5",
                "Level 1: Session 6"
            ]
        },
        {
            header: "Moderate Guiding Videos",
            links: [
                "3zb7Nh_Upls",
                "-ajQ8ddWrUg",
                "L_NQy0bInok",
                "kwiHORsMBcc",
                "1zUxn6P6cGE",
                "4mPcd83f1ws"
            ],
            labels: [
                "Level 2: Session 1",
                "Level 2: Session 2",
                "Level 2: Session 3",
                "Level 2: Session 4",
                "Level 2: Session 5",
                "Level 2: Session 6"
            ]
        },
        {
            header: "Vigorous Guiding Videos",
            links: [
                "JGrCYKVN8tA",
                "51S_NKY7qnU",
                "bOMWbFV8ae8",
                "agAZzVkEjVk",
                "1zUxn6P6cGE",
                "4mPcd83f1ws"
            ],
            labels: [
                "Level 3: Session 1",
                "Level 3: Session 2",
                "Level 3: Session 3",
                "Level 3: Session 4",
                "Level 3: Session 5",
                "Level 3: Session 6"
            ]
        },
    ];

    return (
      <div className='bg-white shadow-inner'>
        <div className="navbar navbar-expand-lg navbar-inverse navbar-fixed-bottom flex justify-around items-center w-full" id="footer">
          <div className="flex justify-between" id="videos-container">
            {videoSections.map((section, idx) => (
              <div key={idx} className="video-section-container mr-2">
                <b className="video-header">{section.header}</b>
                <ul>
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={`https://www.youtube.com/watch?v=${link}`} target="_blank" rel="noopener noreferrer" className="class-links">
                        {section.labels[linkIdx]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div id="app-icons" className="flex flex-col space-y-4">  {/* Add flex and spacing between icons */}
            <a href="https://play.google.com/store/apps/details?id=com.gum.a499_android" target="_blank" rel="noopener noreferrer">
              <img src={playstorelogo} alt="Google play badge" className="w-40 h-12" />  {/* TailwindCSS classes for width and height */}
            </a>
            <a href="https://apps.apple.com/app/get-up-and-move/id1624817449" target="_blank" rel="noopener noreferrer">
              <img src={applestorelogo} alt="Apple store badge" className="w-40 h-12" />  {/* TailwindCSS classes for width and height */}
            </a>
          </div>

        </div>
      </div>
    );
}

export default Footer;
