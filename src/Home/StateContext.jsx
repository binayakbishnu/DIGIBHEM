import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState({
        orderDateTime: "",
        name: "",
        date: "",
        days: 0,
        persons: 0,
        roomType: "delux",
        amenities: { ac: false, locker: false },
        roomCost: 2500,
        amenitiesCost: 0,
        advanceAmount: 0,
        totalCost: 0,
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
