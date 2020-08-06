import React, { useContext, useCallback } from 'react';
import firebaseConfig from '../../../firebase'
import { OrderContext } from './orderContext';

const Order = () => {
    const { state } = useContext(OrderContext)
    const HandleSendOrder = useCallback(
        async event => {
            const db = firebaseConfig.firestore();
            const order = {
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
                                <select className="select-desk-number" name="select-desk">
                                    <option value="valor1">Mesa 1</option>
                                    <option value="valor2">Mesa 2</option>
                                    <option value="valor3">Mesa 3</option>
                                    <option value="valor4">Mesa 4</option>
                                    <option value="valor5">Mesa 5</option>
                                </select>
                                <input className="input-client-name" type="string" id="clientName" placeholder="Nome do cliente" />
                            </div>
                            <div id="printOrder"></div>
                            <div id="priceOrder"></div>
                            <input type="button" onClick={ HandleSendOrder } className='button-send-to-kitchen' />
                        </div>

                    </React.Fragment>
                );
            }

export default Order;