import React, { useState, useEffect } from 'react';
import Button from './Button';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { useAuth } from '../AuthContext';

const GuidingVideo = ({ video }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [player, setPlayer] = useState(null);
    const { currentUser } = useAuth();

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Function to create the YouTube player
        const createPlayer = () => {
            const newPlayer = new window.YT.Player(`youtube-player-${video.YtUrl}`, {
                videoId: video.YtUrl,
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
            setPlayer(newPlayer);
        };

        // Initialize player when dropdown opens
        if (isOpen) {
            // Check if YouTube IFrame API script is already loaded
            if (window.YT && window.YT.Player) {
                // If already loaded and player not initialized, create the player
                if (!player) {
                    createPlayer();
                }
            } else if (!window.YT) {
                // Load the YouTube IFrame Player API if it's not already loaded
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                // Set up the callback for when the API is ready
                window.onYouTubeIframeAPIReady = createPlayer;
            }
        }

        // Add a check to destroy the player when the dropdown is closed
        if (!isOpen && player) {
            player.destroy();
            setPlayer(null);
        }
    }, [isOpen, player, video]);

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            addPointToUserProfile();
        }
    };

    const addPointToUserProfile = async () => {
        console.log("Video ended, adding point to user profile");
        
        if(currentUser){
            console.log(currentUser)
            const docRef = doc(db, 'Users', currentUser.id);
            try {
                await updateDoc(docRef, {
                    points: increment(1)
                });
                console.log('Counter incremented');
            } catch (error) {
                console.error('Error incrementing counter:', error);
            }
        }
    };

    return (
        <div className="relative inline-block text-center w-full">
            <Button label={'Session ' + video.Session + ": " + video.Title} onClick={toggleDropdown} additionalClasses='w-full'></Button>
            {isOpen && (
                <div>
                    <div>{video.Title}</div>
                    <div className='w-full rounded-lg p-2' id={`youtube-player-${video.YtUrl}`}></div>
                    <div>{video.Desc}</div>
                </div>
            )}
        </div>
    );
};

export default GuidingVideo;
