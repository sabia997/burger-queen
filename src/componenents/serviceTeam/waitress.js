import React, { useCallback, useState } from 'react';
import firebaseConfig from '../../firebase';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'
import ImgHamburger from './menuIcons/hamburger';
import ImgFrenchFries from './menuIcons/frenchFries';
import ImgSoda from './menuIcons/soda';
import ImgCoffee from './menuIcons/coffee';
import Order from './options/order';
import MenuItem  from './options/menuItem';

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

    const [order, setOrder] = useState([]);    
    
    const handleClick = useCallback(
        async event => {
            const eventName = event.target.name;
            console.log(order);

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
                        setOrder: setOrder,
                        order: order
                    }))
            }
            ReactDOM.render(mapData, document.getElementById('menuItem-' + eventName ))
            menuState[eventName] = !menuState[eventName];
        }, [menuState])
    return (
        <React.Fragment>
            <header>
                <Menu>
                    <button onClick={handleLogout} className='menu-burger-option'>Sair</button>
                    <button className='menu-burger-option'>Pedidos</button>
                    <button className='menu-burger-option'>Histórico</button>
                </Menu>
            </header>
            <main className='waitress'>
                <div className="menu-options">
                    <section className='menu-option'>
                        <button onClick={handleClick} type='submit' className='input-request' name="hamburger">Lanches</button>
                        <ImgHamburger />
                        <div id="menuItem-hamburger"></div>
                    </section>
                    <section className='menu-option'>
                        <button onClick={handleClick}  type='submit' className='input-request' name="sideDishes">Acompanhamentos</button>
                        <ImgFrenchFries />
                        <div id="menuItem-sideDishes"></div>
                    </section>
                    <section className='menu-option'>
                        <button onClick={handleClick} type='submit' className='input-request' name="drinks" >Bebidas</button>
                        <ImgSoda />
                        <div id="menuItem-drinks"></div>
                    </section>
                    <section className='menu-option'>
                        <button onClick={handleClick} type='submit' className='input-request' name="coffee">Coffee</button>
                        <ImgCoffee />
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