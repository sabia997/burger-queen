import React, { useCallback, useContext } from 'react';
import { OrderContext } from './orderContext';
import ReactDOM from 'react-dom';

const OrderItem = (doc) => {
    const { state } = useContext(OrderContext)
    const RemoveItem = useCallback(
        async event => {
            let mapOrder = [];
            const eventId = event.target.id;
            state.order.pop({ id: eventId, data: doc.doc.data });
            state.price = state.price - doc.doc.data.price;
            mapOrder = state.order.map(doc => React.createElement(OrderItem, { key: doc.id, doc: doc, }))
            ReactDOM.render(mapOrder, document.getElementById("printOrder"));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )
    return (
        <React.Fragment>
            <div className="checkOptions">
                <label htmlFor="menuOptionSubtract">{doc.doc.data.name}</label>
                <input className="menu-checkbox" onClick={RemoveItem} type="button" name="menuOptionSubtract" value="-" />
            </div>
        </React.Fragment>)
}



export default OrderItem;