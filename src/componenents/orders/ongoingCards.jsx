import React, {useCallback} from 'react';
import firebaseConfig from '../../firebase';

const OngoingCards = (doc) => {
    const ChangeStatus = useCallback(
        async event => {
            event.preventDefault();
            const db = firebaseConfig.firestore();
            db.collection("client_orders").doc(event.target.name).update({status:"done"})
        }
    )

    return (
    <React.Fragment>
        <div className="ongoing-orders">
            <div>{doc.doc.data.name}</div>
            <div>{doc.doc.data.desk}</div>
            <div>{doc.doc.data.date}</div>
            <div>{doc.doc.data.order.map(element => element.data.name)}</div>
            <button name={doc.doc.id} onClick={ChangeStatus} id="changeStatus">Entregue</button>
        </div>
    </React.Fragment> 
    )
    }
export default OngoingCards;