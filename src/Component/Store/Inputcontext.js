import React, { createContext, useState } from 'react';

export const Inputcontext = createContext();

export function InputProvider({ children }) {
    const [visibleFields, setVisibleFields] = useState({});

    const showField = (fieldName) => {
        setVisibleFields(prevState => ({ ...prevState, [fieldName]: true }));
    };

    return (
        <Inputcontext.Provider value={{ visibleFields, showField }}>
            {children}
        </Inputcontext.Provider>
    );
}
