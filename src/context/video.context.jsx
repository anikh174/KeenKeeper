'use client';
import React, { createContext, useState } from 'react';

export const videoContext = createContext();

const VideoProvider = ({children}) => {
    const [video, setVideo] = useState([]);

    const data = {
        video,
        setVideo,
    }
    return (
        <videoContext.Provider value={data}>
            {children}
        </videoContext.Provider>
    );
};

export default VideoProvider;