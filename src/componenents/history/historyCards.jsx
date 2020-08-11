import React from 'react';

const HistoryCards = (doc) => {
    return (
        <React.Fragment>
            <section className="section-order">
                <div className="item-order">Cliente: {doc.doc.data.name}</div>
                <div className="item-order">Mesa: {doc.doc.data.desk}</div>
                <div className="item-order">Data: {doc.doc.data.date}</div>
                <ul className="item-order">Pedido: {doc.doc.data.order.map(element => <li>{element.name}</li>)}</ul>
            </section>
        </React.Fragment>
    )
}
export default HistoryCards;