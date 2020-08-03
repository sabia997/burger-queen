import React, { useState } from "react";

const initialState =
    {
        order: {
            order: []        }
    }

export const StateOrderContext = React.createContext(
    {
        order: initialState
    });

export const Context = props => {

    const [order, _setOrder] = useState(initialState)

    return (
        <StateOrderContext.Provider value={{ order }} >
            {props.children}
        </StateOrderContext.Provider>
    );

}
