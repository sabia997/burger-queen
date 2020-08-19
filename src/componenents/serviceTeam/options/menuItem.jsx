import React, { useCallback, useContext } from 'react';
import { OrderContext } from './orderContext';
import ReactDOM from 'react-dom';
import OrderItem from './orderItem';
import Price from './price';
import firebaseConfig from '../../../firebase';

const MenuItem = (doc) => {
    const { state } = useContext(OrderContext)
    const AddItem = useCallback(
        async event => {
            event.preventDefault();
            let mapOrder = [];
            let addPrice = 0;
            const target = event.target;
            const eventId = target.id;
            const db = firebaseConfig.firestore();
            await db.collection("menu")
                .doc(event.target.id)
                .get()
                .then(function (doc) {
                    state.order.push({ id: eventId, data: doc.data()});
                    state.price = state.price + doc.data().price  
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
            mapOrder = state.order.map(doc => React.createElement(OrderItem, { key: doc.id, doc: doc, }))
            ReactDOM.render(mapOrder, document.getElementById("printOrder"));

            addPrice = [{ price: state.price }].map(doc => React.createElement(Price, { key: doc.id, doc: doc, }))
            ReactDOM.render(addPrice, document.getElementById("priceOrder"));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <React.Fragment>
            <div className="options">
                <form onSubmit={AddItem} id={doc.doc.id} className="checkOptions">
                    <input type="submit" className="menu-checkbox-add" name="menuOptionAdd" value="+" />
                    <label className="menu-label" htmlFor="menuOptionAdd">{doc.doc.data.name + ` R$ ${doc.doc.data.price},00`}</label>
                </form>
            </div>

        </React.Fragment>)
}

export default MenuItem;