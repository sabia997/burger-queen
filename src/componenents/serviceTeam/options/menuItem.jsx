import React, { useCallback, useContext } from 'react';
import { OrderContext } from './orderContext';
import ReactDOM from 'react-dom';
import OrderItem from './orderItem';
import firebaseConfig from '../../../firebase';

const MenuItem = (doc) => {
    const { state } = useContext(OrderContext)
    const AddItem = useCallback(
        async event => {
            let mapOrder = [];
            const eventId = event.target.id;
            const db = firebaseConfig.firestore();
            await db.collection("menu")
                    .doc(event.target.id)
                    .get()
                    .then(function (doc){
                            state.order.push({ id: eventId, data: doc.data() });
                            state.price += doc.data().price;
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
            mapOrder = state.order.map(doc => React.createElement(OrderItem, { key: doc.id, doc: doc,}))
            ReactDOM.render(mapOrder, document.getElementById("printOrder"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input id={doc.doc.id} className="menu-checkbox" onClick={AddItem} type="button" name="menuOptionAdd" value="+" />
                    <label className="menu-label" htmlFor="menuOptionAdd">{doc.doc.data.name}</label>
                </div>
            </div>
        </React.Fragment>)
}

export default MenuItem;