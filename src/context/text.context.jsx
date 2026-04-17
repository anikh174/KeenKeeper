'use client';
import React, { createContext, useState } from 'react';

export const textContext = createContext();

const TextProvider = ({children}) => {
    const [text, setText] = useState([]);

    const data = {
        text,
        setText,
    }
    return (
        <textContext.Provider value={data}>
            {children}
        </textContext.Provider>
    );
};

export default TextProvider;