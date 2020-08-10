import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'
import OrdersCard from './orderCards';

const Cooker = ({ history }) => {
    const handleLogout = useCallback(
        async event => {
            event.preventDefault();
            firebaseConfig.auth().signOut().then(function () {
                alert("Você foi deslogado");
                history.push("/home")
            }).catch(function (error) {
                alert(error);
            });
        },
        [history],
    )

    const cookerOrders = useCallback(
        async event => {
            const db = firebaseConfig.firestore();
            let data = [];
            let mapData = [];
            event.preventDefault();
            db.collection("client_orders").where("status", "==", "kitchen")
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, data: doc.data() })
                    });
                    mapData = data.map(doc => React.createElement(OrdersCard, {
                        key: doc.id,
                        doc: doc,
                    }))
                    ReactDOM.render(mapData, document.getElementById("kitchenOrders"))
                })
        }
        , [])

    return (
        <React.Fragment>
            <header>
                <Menu>
                    <button onClick={handleLogout} className='menu-burger-option'>Sair</button>
                    <button onClick={() => history.push("/historyCooker")} className='menu-burger-option'>Histórico</button>
                    <button onClick={() => history.push("/ordersCooker")} className='menu-burger-option'>Pedidos</button>
                </Menu>
            </header>
            <main>
                <button onClick={cookerOrders} type="button">Reload</button>
                <div id="kitchenOrders"></div>
            </main>
        </React.Fragment>
    )
}

export default Cooker;