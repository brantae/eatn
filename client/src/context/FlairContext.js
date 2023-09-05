import React, { createContext, useContext, useState, useEffect } from 'react';

const FlairContext = createContext();

export function useFlairContext() {
    return useContext(FlairContext);
    }

    export function FlairProvider({ children }) {
    const [existingFlairs, setExistingFlairs] = useState([]);

    useEffect(() => {
        fetch('/flairs')
        .then((response) => response.json())
        .then((data) => {
            setExistingFlairs(data);
        })
        .catch((error) => {
            console.error('Error fetching existing flairs:', error);
        });
    }, []);

    return (
        <FlairContext.Provider value={{ existingFlairs }}>
        {children}
        </FlairContext.Provider>
    );
    }