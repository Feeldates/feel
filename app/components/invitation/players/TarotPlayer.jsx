"use client"
import React, { useState, useRef } from 'react';
import {BsFillPlayFill, BsStopFill, BsFillVolumeUpFill, BsFillVolumeMuteFill} from "react-icons/bs";


const TarotPlayer = ({ audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = React.createRef();

    const playPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className={"text-blanco "}>
            {/*<audio ref={audioRef} controls controlsList={"nodownload"}>*/}
            <audio ref={audioRef} className={""}>
                <source src={audioUrl} type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>

            <div className={"space-x-2"}>
                <button className={"text-[20px] md:text-[30px]"} onClick={playPause}>{isPlaying ? <BsFillPlayFill/> : <BsStopFill/>}</button>
                <button className={"text-[20px] md:text-[30px]"} onClick={toggleMute}>{isMuted ? <BsFillVolumeMuteFill/> : <BsFillVolumeUpFill/>}</button>
            </div>
        </div>
    );
};

export default TarotPlayer;