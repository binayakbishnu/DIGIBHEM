import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState({
        name: "",
        date: "",
        days: 0,
        persons: 0,
        roomType: "delux",
        amenities: { ac: false, locker: false },
    });

    return (
        <StateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    return useContext(StateContext);
};
