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
            const target = event.currentTarget;
            const eventId = target.id;
            const db = firebaseConfig.firestore();
            await db.collection("menu")
                .doc(event.target.id)
                .get()
                .then(function (doc) {
                    let raw = doc.data();
                    const {
                        extraCheese
                    } = target.elements
                    raw.extraCheese = extraCheese.checked;
                    let price = raw.price;
                    if (raw.extraCheese) {
                        raw.price = price + 1;
                    } 
                    state.order.push({ id: eventId, data: raw });
                    state.price = state.price + raw.price;
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
                    <label className="menu-label" htmlFor="menuOptionAdd">{doc.doc.data.name + ` R$ ${doc.doc.data.price},00 | `}</label>
                    <input className="checkbox-extras" name="extraCheese" type="checkbox" />
                    <label className="menu-label" htmlFor="extraCheese">Queijo</label>
                </form>
            </div>

        </React.Fragment>)
}

export default MenuItem;