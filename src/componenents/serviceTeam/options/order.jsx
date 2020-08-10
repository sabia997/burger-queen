import React, { useContext, useState } from 'react';
import { OrderContext } from './orderContext';
import firebaseConfig from '../../../firebase';
import Modal from 'react-modal'


const Order = () => {
    const { state } = useContext(OrderContext)
    const [name, setName] = useState("");
    const [table, setTable] = useState("");
    const [price, setPrice] = useState("");
    const [modalError, setModalError] = useState(false)
    const [modal, setModal] = useState(false)
    let date = new Date();
    let hour = '0'+ date.getDate()+'/0'+ date.getMonth()+ '/'+date.getFullYear()+'às'+date.getHours() + ':' + date.getMinutes();

    const sendRequest = (evt) => {
        if ((state.order).length === 0 || table === '' || name ==='' ) {
            setModalError(true)
        } else {
            evt.preventDefault();
            let requestArray = []
            console.log(state.price)
            for (const element in state.order) {
                requestArray.push(state.order[element].data.name)
            }
            const db = firebaseConfig.firestore();
            db.collection("request").doc().set({
                staus: 'em preparo',
                hour: hour, 
                cliente: name,
                desk: table,
                request: requestArray,
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
            <Modal className = 'Modal' isOpen={modalError}>
              <h2>Erro!</h2><br/>
              <p className = 'modalInstructions'>Preencha todos os campos corretamente!</p><br/>
              <button className= 'input-request' onClick = {() => setModalError(false)}> Entendi!</button>
            </Modal>
            <Modal className = 'Modal' isOpen={modal}>
              <h2>Pedido enviado! </h2><br/>
              <p className = 'modalInstructions'>cliente:{name}</p> 
              <p className = 'modalInstructions'> mesa: {table}</p>
              <button className= 'input-request' onClick = {() => setModal(false)}> Ok</button>
            </Modal>
            <div className="request-resume" >
                <div className="buttons-client">
                    <select className="select-desk-number" name="select-desk"value={table} onChange={e => setTable(e.target.value)}>
                        <option value="">mesa ?</option>
                        <option value="Mesa 1">Mesa 1</option>
                        <option value="Mesa 2">Mesa 2</option>
                        <option value="Mesa 3">Mesa 3</option>
                        <option value="Mesa 4">Mesa 4</option>
                    </select>
                    <input className="input-client-name" type="string" placeholder="Nome do cliente" value={name} onChange={e => setName(e.target.value)}/>
                    <div id="printOrder"></div>
                    <input type='submit' value= "ver valor total" className= 'seePrice' onClick={() => setPrice(`R$ ${state.price},00`)}></input>
                    <p id="priceOrder"  >{price} </p>
                </div>
                <input type="submit" onClick={sendRequest} value = ''className='button-send-to-kitchen' />
            </div>
        </React.Fragment>
    );
}

export default Order;