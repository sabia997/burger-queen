import React, { useContext, useCallback } from 'react';
import firebaseConfig from '../../../firebase'
import { OrderContext } from './orderContext';

const Order = () => {
    const { state } = useContext(OrderContext)

    const HandleSendOrder = useCallback(
        async event => {
            event.preventDefault();
            const {
                clientName,
                desk
            } = event.target.elements;
            const db = firebaseConfig.firestore();
            const order = {
                name: clientName.value,
                desk: desk.value,
                order: state.order, 
                price: state.price, 
                status: "kitchen",
                date: new Date().toLocaleString()
            }
            await db.collection('client_orders').add(order);
        });
                return (
                    <React.Fragment>
                        <div className="request-resume" >
                            <div className="buttons-client">
                                <form onSubmit={HandleSendOrder}>
                                    <input name="desk" type="number" className="select-desk-number" id="desk"placeholder="Mesa"/>
                                    <input name="clientName" className="input-client-name" type="string" id="clientName" placeholder="Nome do cliente" />
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