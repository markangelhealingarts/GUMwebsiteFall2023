import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Video from './Video';

const VideoContent = () => {
  const [video, setVideo] = useState(null);
  const { videoLevel, videoSession } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoQuery = query(
          collection(db, "GuidingVideos"),
          where("Level", "==", Number(videoLevel)), 
          where("Session", "==", Number(videoSession))
        );
        const querySnapshot = await getDocs(videoQuery);
        const videoData = querySnapshot.docs
          .map(doc => ({
            id: doc.id, // Accessing the document ID
            ...doc.data() // Accessing the document data
          }));
        setVideo(videoData[0]);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchVideoData();
  }, [videoLevel, videoSession]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Video video={video} videoLevel={videoLevel}/>
    </div>
  );
};

export default VideoContent;
