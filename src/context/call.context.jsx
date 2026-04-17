'use client';
import React, { createContext, useState } from 'react';

export const callContext = createContext();

const CallProvider = ({children}) => {
    const [call, setCall] = useState([]);

    const data = {
        call,
        setCall,
    }
    return (
        <callContext.Provider value={data}>
            {children}
        </callContext.Provider>
    );
};

export default CallProvider;