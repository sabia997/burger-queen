import React from 'react';

const HistoryCards = (doc) => {
    return (
    <React.Fragment>
        <div className="kitchen-orders">
            <div>{doc.doc.data.name}</div>
            <div>{doc.doc.data.desk}</div>
            <div>{doc.doc.data.date}</div>
            <div>{doc.doc.data.order.map(element => element.data.name)}</div>
        </div>
    </React.Fragment> 
    )
    }
export default HistoryCards;