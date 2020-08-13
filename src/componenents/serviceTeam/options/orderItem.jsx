import React, { useCallback, useContext } from 'react';
import { OrderContext } from './orderContext';
import ReactDOM from 'react-dom';
import Price from './price';

const OrderItem = (doc) => {
    const { state } = useContext(OrderContext)
    const RemoveItem = useCallback(
        async event => {
            let mapOrder = [];
            let removePrice = 0;
            const eventId = event.target.id;
            state.order.pop({ id: eventId, data: doc.doc.data });
            state.price = state.price - doc.doc.data.price;
            mapOrder = state.order.map(doc => React.createElement(OrderItem, { key: doc.id, doc: doc, }))
            ReactDOM.render(mapOrder, document.getElementById("printOrder"));

            removePrice = [{ price: state.price }].map(doc => React.createElement(Price, { key: doc.id, doc: doc, }))
            ReactDOM.render(removePrice, document.getElementById("priceOrder"));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )
    return (
        <React.Fragment>
            <div className="checkOptions">
                <input className="menu-checkbox-remove" onClick={RemoveItem} type="button" name="menuOptionSubtract" value="-" />
                <label className='menuOptionSubtract' htmlFor="menuOptionSubtract">{doc.doc.data.name}</label>
            </div>
        </React.Fragment>)
}

export default OrderItem;