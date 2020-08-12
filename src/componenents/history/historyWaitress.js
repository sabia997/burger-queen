import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'
import HistoryCards from './historyCards';
import ListIcon from './icons/listIcon';

const HistoryOrders = ({ history }) => {
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

    const historyOrders = useCallback(
        async event => {
            const db = firebaseConfig.firestore();
            let data = [];
            let mapData = [];
            event.preventDefault();
            db.collection("client_order").where("status", "==", "done")
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, data: doc.data() })
                    });
                    mapData = data.map(doc => React.createElement(HistoryCards, {
                        key: doc.id,
                        doc: doc,
                    }))
                    ReactDOM.render(mapData, document.getElementById("historyOrders"))
                })
        }
        , [])

    return (
        <React.Fragment>
            <header>
                <Menu>
                    <button onClick={handleLogout} className='menu-burger-option'>Sair</button>
                    <button onClick={() => history.push("/waitress")} className='menu-burger-option'>Serviço</button>
                    <button onClick={() => history.push("/ordersWaitress")} className='menu-burger-option'>Pedidos</button>
                </Menu>
            </header>
            <main>
                <button name="reloadButton" className="button-reload" onClick={historyOrders} type="button"></button>
                <label for="reloadButton" className="label-reload">Atualize o histórico de pedidos concluídos {<ListIcon />}</label>
                <div id="historyOrders"></div>
            </main>
        </React.Fragment>
    )
}

export default HistoryOrders;