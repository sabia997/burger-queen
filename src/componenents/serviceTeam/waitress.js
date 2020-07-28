import React, { useCallback, useState } from 'react';
import firebaseConfig from '../../firebase';
import ImgHamburger from './menuIcons/hamburger';
import ImgFrenchFries from './menuIcons/frenchFries';
import ImgSoda from './menuIcons/soda';
import ImgCoffee from './menuIcons/coffee';
import Request from './options/request';
import HamburgerOptionsView from './options/hamburgersForm';
import SideDishesOptionsView from './options/sideDishesForm';
import DrinksOptionsView from './options/drinksForm';
import BreakFastOptionsView from './options/breakFastForm';

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

    const [HamburgerOptions, setShowhamburger] = useState(false);
    const [SideDishesOptions, setShowSideDishes] = useState(false);
    const [DrinksOptions, setShowDrinks] = useState(false);
    const [BreakFastOptions, setShowCoffee] = useState(false);

    const ShowhamburgerOptions = () => {
        if (HamburgerOptions === false) {
            setShowhamburger(true)
        } else {
            setShowhamburger(false)
        }
    }
    const ShowSideDishesOptions = () => {
        if (SideDishesOptions === false) {
            setShowSideDishes(true)
        } else {
            setShowSideDishes(false)
        }
    }
    const ShowDrinksOptions = () => {
        if (DrinksOptions === false) {
            setShowDrinks(true)
        } else {
            setShowDrinks(false)
        }
    }
    const ShowBreakFastOptions = () => {
        if (BreakFastOptions === false) {
            setShowCoffee(true)
        } else {
            setShowCoffee(false)
        }
    }

    return (
        <React.Fragment>
            <header>
                <button onClick={handleLogout} className='logout'>SAIR</button>
            </header>
            <main className='waitress'>

                <section className='menu-option'>
                    <button onClick={ShowhamburgerOptions} type='submit' className='input-request'>Lanches</button>
                    <ImgHamburger />
                </section>
                {HamburgerOptions ? <HamburgerOptionsView /> : null}

                <section className='menu-option'>
                    <button onClick={ShowSideDishesOptions} type='submit' className='input-request'>Acompanhamentos</button>
                    <ImgFrenchFries />
                </section>
                {SideDishesOptions ? <SideDishesOptionsView /> : null}

                <section className='menu-option'>
                    <button onClick={ShowDrinksOptions} type='submit' className='input-request'>Lanches</button>
                    <ImgSoda />
                </section>
                {DrinksOptions ? <DrinksOptionsView /> : null}

                <section className='menu-option'>
                    <button onClick={ShowBreakFastOptions} type='submit' className='input-request'>Acompanhamentos</button>
                    <ImgCoffee />
                </section>
                {BreakFastOptions ? <BreakFastOptionsView /> : null}

                <section className='total-requests'>
                    <Request />
                </section>
                
            </main>
        </React.Fragment>
    );
}

export default Waitress;