import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { useAuth } from '../AuthContext';

const Video = ({ video }) => {
    const [player, setPlayer] = useState(null);
    const { currentUser } = useAuth();

    const addPointToUserProfile = useCallback(async () => {
      console.log("Adding points");
    
      // Check if a user is logged in
      if (currentUser) {
        // Construct the reference to the user's document in Firestore
        const userRef = doc(db, 'Users', currentUser.uid);
    
        try {
          // Increment the points field by 1
          await updateDoc(userRef, {
            points: increment(currentUser.level)
          });
          console.log('Point added to user profile');
        } catch (error) {
          console.error('Error updating user points:', error);
        }
      } else {
        console.log('No user logged in');
      }
    }, [currentUser]);

    useEffect(() => {
        // Function to create the YouTube player
        const createPlayer = () => {
          const newPlayer = new window.YT.Player(`youtube-player-${video.YtUrl}`, {
            videoId: video.YtUrl,
            events: {
              'onStateChange': (event) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                    addPointToUserProfile();
                }
              }
            }
          });
          setPlayer(newPlayer);
        };

        // Initialize player
        if (window.YT && window.YT.Player) {
          if (!player) {
            createPlayer();
          }
        } else if (!window.YT) {
          const tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          window.onYouTubeIframeAPIReady = createPlayer;
        }

        return () => {
          if (player) {
            player.destroy();
            setPlayer(null);
          }
        };
    }, [player, video, addPointToUserProfile]);

    return (
        <div className="relative inline-block text-center w-full">
          <div>
            <div>{video.Title}</div>
            <div className='w-full' id={`youtube-player-${video.YtUrl}`}></div>
            <div>{video.Desc}</div>
          </div>
        </div>
    );
};

export default Video;
