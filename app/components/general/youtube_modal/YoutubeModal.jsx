"use client"

import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';

const YoutubeFrame = ({videoId}) => {

    // Manejador de eventos para el reproductor de YouTube
    const onReady = (event) => {
        // Acciones a realizar cuando el reproductor está listo
        event.target.playVideo();
    };

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const notDesktop = width < 1024;

    return (
        <div className={"w-full"}>
            <YouTube
                videoId={videoId}
                opts={{
                    height: notDesktop ? "250" : "500",
                    width: '100%',
                    playerVars: {
                        autoplay: 1,
                    },
                }}
                onReady={onReady}
            />
        </div>
    );
};

export default YoutubeFrame;