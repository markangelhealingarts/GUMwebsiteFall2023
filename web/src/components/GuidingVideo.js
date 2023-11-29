import React, { useState } from 'react';
import Button from './Button';

const GuidingVideo = ({ video }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-center w-full">
            <Button label={'Session ' + video.Session + ": " + video.Title} onClick={toggleDropdown} additionalClasses='w-full'></Button>
            {isOpen && (
                <div>
                    <iframe
                        id={`youtube-player-${video.YtUrl}`}
                        src={`https://www.youtube.com/embed/${video.YtUrl}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='w-full aspect-video rounded-lg p-2'
                    ></iframe>
                    <div>{video.Desc}</div>
                </div>
            )}
        </div>
    );
};

export default GuidingVideo;
