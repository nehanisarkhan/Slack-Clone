import React, { useReducer, useContext, createContext } from "react";

//using react Context API to access user from anywhere

export const StateContex = createContext(); //wrapping our app in a data layer to push/pull information from here

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/**entire app */}
  </StateContex.Provider>
);

export const useStateValue = () => useContext(StateContex); //to access information from the data layer
