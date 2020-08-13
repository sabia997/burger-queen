import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'
import ImgHamburger from './menuIcons/hamburger';
import ImgFrenchFries from './menuIcons/frenchFries';
import ImgSoda from './menuIcons/soda';
import ImgCoffee from './menuIcons/coffee';
import Order from './options/order';
import MenuItem from './options/menuItem';

const Waitress = ({ history }) => {
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

    const menuState = {
        hamburger: false,
        sideDishes: false,
        drinks: false,
        coffee: false
    }

    const handleClick = useCallback(
        async event => {
            const eventName = event.target.name;
            let mapData = [];
            let data = [];
            if (!menuState[eventName]) {
                const db = firebaseConfig.firestore();
                event.preventDefault();

                await db.collection("menu").where("type", "==", eventName)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            data.push({ id: doc.id, data: doc.data() })
                        });
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
                mapData =
                    data.map(doc => React.createElement(MenuItem, {
                        key: doc.id,
                        doc: doc,
                    }))
            }
            ReactDOM.render(mapData, document.getElementById('menuItem-' + eventName))
            menuState[eventName] = !menuState[eventName];
        }, [menuState])
    return (
        <React.Fragment>
            <header>
                <Menu>
                    <button onClick={handleLogout} className='menu-burger-option'>Sair</button>
                    <button onClick={() => history.push("/historyWaitress")} className='menu-burger-option'>Histórico</button>
                    <button onClick={() => history.push("/ordersWaitress")} className='menu-burger-option'>Pedidos</button>
                </Menu>
            </header>
            <main className='waitress'>
                <div className="menu-options">
                    <section className='menu-option'>
                        <div className='button-and-image'>
                            <button onClick={handleClick} type='submit' className='input-order' name="hamburger">Lanches</button>
                            <ImgHamburger />
                        </div>
                        <div id="menuItem-hamburger"></div>
                    </section>
                    <section className='menu-option'>
                        <div className='button-and-image'>
                            <button onClick={handleClick} type='submit' className='input-order' name="sideDishes">Acompanhamentos</button>
                            <ImgFrenchFries />
                        </div>
                        <div id="menuItem-sideDishes"></div>
                    </section>
                    <section className='menu-option'>
                        <div className='button-and-image'>
                            <button onClick={handleClick} type='submit' className='input-order' name="drinks" >Bebidas</button>
                            <ImgSoda />
                        </div>
                        <div id="menuItem-drinks"></div>
                    </section>
                    <section className='menu-option'>
                        <div className='button-and-image'>
                            <button onClick={handleClick} type='submit' className='input-order' name="coffee">Coffee</button>
                            <ImgCoffee />
                        </div>
                        <div id="menuItem-coffee"></div>
                    </section>
                </div>
                <section className='total-requests'>
                    <Order />
                </section>
            </main>
        </React.Fragment>
    );
}

export default Waitress;