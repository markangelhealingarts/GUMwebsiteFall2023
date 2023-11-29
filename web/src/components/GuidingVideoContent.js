import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase';
import GuidingVideo from './GuidingVideo';

const GuidingVideoContent = ({level, videoCollection}) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoQuery = query(
                    collection(db, videoCollection),
                    where("Level", "==", level),
                    orderBy("Session")
                );
                const querySnapshot = await getDocs(videoQuery);
                const videoData = querySnapshot.docs
                    .map(doc => ({
                        id: doc.id, // Accessing the document ID
                        ...doc.data() // Accessing the document data
                    }))
                setVideos(videoData);
            } catch (error) {
                console.error("Error fetching data from Firestore:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {videos.map(video => (
                <GuidingVideo
                    key={video.id}
                    video={video}
                />
            ))}
        </div>
    );
};

export default GuidingVideoContent;