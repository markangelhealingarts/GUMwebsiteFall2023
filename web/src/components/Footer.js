// src/components/Footer.js
import React from 'react';

function Footer() {
    const videoSections = [
        {
            header: "Easy Guiding Videos",
            links: [
                "https://www.youtube.com/watch?v=HLVORLKgbG0",
                "https://www.youtube.com/watch?v=khRNGR_nRZM",
                // ... other links
            ],
            labels: [
                "Level 1: Session 1",
                "Level 1: Session 2",
                // ... other labels
            ]
        },
        {
            header: "Moderate Guiding Videos",
            links: [
                "https://www.youtube.com/watch?v=3zb7Nh_Upls",
                // ... other links
            ],
            labels: [
                "Level 2: Session 1",
                // ... other labels
            ]
        },
        {
            header: "Vigorous Guiding Videos",
            links: [
                "https://www.youtube.com/watch?v=JGrCYKVN8tA",
                // ... other links
            ],
            labels: [
                "Level 3: Session 1",
                // ... other labels
            ]
        },
    ];

    return (
        <div className="navbar navbar-expand-lg navbar-inverse navbar-fixed-bottom" id="footer">
            <div id="videos-container">
                {videoSections.map((section, idx) => (
                    <div key={idx} className="video-section-container">
                        <b className="video-header">{section.header}</b>
                        <ul>
                            {section.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="class-links">
                                        {section.labels[linkIdx]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footer;
