// setup data layer
// we need this to track the basket

import { createContext, useReducer } from "react";

// This is the daa layer
export const StateContext = createContext();

// build a provider:
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)