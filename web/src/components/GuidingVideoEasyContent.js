import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import GuidingVideo from './GuidingVideo';

const GuidingVideoEasyContent = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoQuery = query(
                    collection(db, "GuidingVideos"),
                    orderBy("Session")
                );
                const querySnapshot = await getDocs(videoQuery);
                const videoData = querySnapshot.docs
                    .map(doc => ({
                        id: doc.id, // Accessing the document ID
                        ...doc.data() // Accessing the document data
                    }))
                    .filter(video => video.Level === 1); // Filter videos with level 1
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

export default GuidingVideoEasyContent;