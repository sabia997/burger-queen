import React, { useState } from 'react';

const initialState =
{
    order: [],
    price: 0 
}

export const OrderContext = React.createContext(
    {
        state: initialState,
        actions: { setOrder: () => { } }
    });

const setOrder = (state, setState, order) => {
    setState({ order })
}

export const Context = props => {

    const [state, _setState] = useState(initialState)
    const setState = (_state) => {
        const newState = { ...state, ..._state }
        _setState(newState)
    }

    const actions = {
        setUser: setOrder.bind(null, state, setState)
    }

    return (
        <OrderContext.Provider value={{ state, actions }} >
            {props.children}
        </OrderContext.Provider>
    );

}
