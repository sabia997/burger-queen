import React, { useContext, useState } from 'react';
import { OrderContext } from './orderContext';
import firebaseConfig from '../../../firebase';
import Modal from 'react-modal'

const Order = () => {
    const { state } = useContext(OrderContext)
    const [name, setName] = useState("");
    const [table, setTable] = useState("");
    const [modalError, setModalError] = useState(false)
    const [modal, setModal] = useState(false)

    const sendOrder = (evt) => {
        if ((state.order).length === 0 || table === '' || name ==='' ) {
            setModalError(true)
        } else {
            evt.preventDefault();
            let orderArray = []
            for (const element in state.order) {
                orderArray.push(state.order[element].data)
            }
            const db = firebaseConfig.firestore();
            db.collection("client_order").add({
                status: 'kitchen',
                date: new Date().toLocaleString(),
                name: name,
                desk: table,
                order: orderArray,
                price: state.price,
            })
                .then(function () {
                    console.log("Document successfully written!");
                    setModal(true)
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }
    }
    Modal.setAppElement('#root')

    return (
        <React.Fragment>
            <Modal className='Modal' isOpen={modalError}>
                <h2>Erro!</h2><br />
                <p className='modalInstructions'>Preencha todos os campos corretamente!</p><br />
                <button className='input-order' onClick={() => setModalError(false)}> Entendi!</button>
            </Modal>
            <Modal className='Modal' isOpen={modal}>
                <h2>Pedido enviado! </h2><br />
                <p className='modalInstructions'>cliente:{name}</p>
                <p className='modalInstructions'> mesa: {table}</p>
                <button className='input-order' onClick={() => setModal(false)}> Ok</button>
            </Modal>
            <div className="order-resume">
                <div className="buttons-client">
                    <form onSubmit={sendOrder}>
                        <input className="select-desk-number" type='number' name="select-desk" value={table} onChange={e => setTable(e.target.value)} />
                        <input className="input-client-name" type="string" placeholder="Nome do cliente" value={name} onChange={e => setName(e.target.value)} />
                        <button type="submit" className='button-send-to-kitchen'></button>
                    </form>
                </div>
                <div id="printOrder"></div>
                <div id="priceOrder"></div>
            </div>
        </React.Fragment>
    );
}

export default Order;