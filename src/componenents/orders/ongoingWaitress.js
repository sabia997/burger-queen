import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'
import OngoingCards from './ongoingCards';

const OngoingOrders = ({ history }) => {
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

    const ongoingOrders = useCallback(
        async event => {
            const db = firebaseConfig.firestore();
            let data = [];
            let mapData = [];
            event.preventDefault();
            db.collection("client_order").where("status", "==", "ready")
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, data: doc.data() })
                    });
                    mapData = data.map(doc => React.createElement(OngoingCards, {
                        key: doc.id,
                        doc: doc,
                    }))
                    ReactDOM.render(mapData, document.getElementById("ongoingOrders"))
                })
        }
        , [])

    return (
        <React.Fragment>
            <header>
                <Menu>
                    <button onClick={handleLogout} className='menu-burger-option'>Sair</button>
                    <button onClick={() => history.push("/waitress")} className='menu-burger-option'>Serviço</button>
                    <button onClick={() => history.push("/historyWaitress")} className='menu-burger-option'>Histórico</button>
                </Menu>
            </header>
            <main>
                <button onClick={ongoingOrders} type="button">Reload</button>
                <div id="ongoingOrders"></div>
            </main>
        </React.Fragment>
    )
}

export default OngoingOrders;