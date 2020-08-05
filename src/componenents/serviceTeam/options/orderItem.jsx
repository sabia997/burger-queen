import React, { useContext } from 'react';
import { OrderContext } from './orderContext';

const OrderItem = (doc) => {
    const { state } = useContext(OrderContext)
   
    const RemoveItem = () => {

    }

    return (
        <React.Fragment>
            <div className="checkOptions">
                <label htmlFor="menuOptionSubtract">{doc.doc.data.name}</label>
                <input className="menu-checkbox" onClick={RemoveItem} type="button" name="menuOptionSubtract" value="-" />
            </div>
        </React.Fragment>)
}

export default OrderItem;