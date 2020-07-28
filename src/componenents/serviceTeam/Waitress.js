import React, { useCallback, useState } from 'react';
import firebaseConfig from '../../firebase';
import OptionsLanche from './Options/OptionsLanche';
import OptionsAcomp from './Options/OptionsAcomp';
import OptionsCafe from './Options/OptionsCafe';
import OptionsBebidas from './Options/OptionsBebidas';
import  Mesa  from './mesa';


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
    const [showLanche, setShowLanche] = useState(false);
    const [showAcomp, setShowAcomp] = useState(false);
    const [showBebidas, setShowBebidas] = useState(false);
    const [showCafe, setShowCafe] = useState(false);


    const showOptionsLanche = () => {
        if (showLanche === false) {
            setShowLanche(true)
        } else {
            setShowLanche(false)
        }
    }
    const showOptionsAcomp = () => {
        if (showAcomp === false) {
            setShowAcomp(true)
        } else {
            setShowAcomp(false)
        }
    }
    const showOptionsBebidas = () => {
        if (showBebidas === false) {
            setShowBebidas(true)
        } else {
            setShowBebidas(false)
        }
    }
    const showOptionsCafe = () => {
        if (showCafe === false) {
            setShowCafe(true)
        } else {
            setShowCafe(false)
        }
    }


    return (
        <React.Fragment>
            <h1>menu</h1>
            <div className='garçon'>
                <div className='menu-pedidos'>
                    <div className='menu-opcao'>
                        <button onClick={showOptionsLanche} type='submit' className='input-pedido' >Lanches</button>
                        <img src={require("./icones/hamburguer.svg")} className='icone' alt="ícone hamburguer" />
                    </div>
                    {showLanche ? <OptionsLanche /> : null}

                    <div className='menu-opcao'>
                        <button onClick={showOptionsAcomp} herf='#box1' type='submit' className='input-pedido' >Acompanhamentos</button>
                        <img src={require("./icones/batata.svg")} className='icone' alt="ícone batata" />
                    </div>
                    {showAcomp ? <OptionsAcomp /> : null}

                    <div className='menu-opcao'>
                        <button onClick={showOptionsBebidas} type='submit' className='input-pedido'> Bebidas</button>
                        <img src={require("./icones/coca.svg")} className='icone' alt="ícone coca" />
                    </div>
                    {showBebidas ? <OptionsBebidas /> : null}

                    <div className='menu-opcao'>
                        <button onClick={showOptionsCafe} type='submit' className='input-pedido'>Café da manhã</button>
                        <img src={require("./icones/coffee.svg")} className='icone' alt="ícone café" />
                    </div>
                    <div  >
                        {showCafe ? <OptionsCafe /> : null}
                    </div>
                </div>
                <div className='total-pedidos'>
                    < Mesa />
                </div>
            </div>
            <button onClick={handleLogout} className = 'inserir-pedido' >SAIR</button>
        </React.Fragment>
    )
};

export default Waitress;
