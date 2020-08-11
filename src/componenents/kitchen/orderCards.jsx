import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';

const OrdersCard = (doc) => {
    const ChangeStatus = useCallback(
        async event => {
            event.preventDefault();
            const db = firebaseConfig.firestore();
            db.collection("client_order").doc(event.target.name).update({ status: "ready" })
        }
    )

    return (
        <React.Fragment>
            <main className="total-orders">
                <section className="section-order">
                    <div className="item-order">Cliente: {doc.doc.data.name}</div>
                    <div className="item-order">Mesa: {doc.doc.data.desk}</div>
                    <div className="item-order">Data: {doc.doc.data.date}</div>
                    <ul className="item-order">Pedido: {doc.doc.data.order.map(element => <li>{element.name}</li>)}</ul>
                <button className="button-submit-status" name={doc.doc.id} onClick={ChangeStatus} id="changeStatus">Pronto para entrega</button>
                </section>
            </main>
        </React.Fragment>
    )
}
export default OrdersCard;