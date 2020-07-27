import React, {useState} from "react";
import OptionsLanche from './opcoes/OptionsLanche'
import OptionsAcomp from './opcoes/OptionsAcomp'
import OptionsCafe from './opcoes/OptionsCafe'
import OptionsBebidas from './opcoes/OptionsBebidas'
import {Mesa} from './mesa'


const Waitress = () => {
  const [showLanche, setShowLanche] = useState(false)
  const [showAcomp, setShowAcomp] = useState(false)
  const [showBebidas, setShowBebidas] = useState(false)
  const [showCafe, setShowCafe] = useState(false)

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
    <>
    <div className = 'garçon'>
    <div className ='menu-pedidos'>
      <div className = 'menu-opcao'>
        <button onClick={showOptionsLanche} type = 'submit' className = 'input-pedido' >Lanches</button>
        <img src = {require("./icones/hamburguer.png")} className ='icone' alt="ícone hamburguer"/>
      </div>
      { showLanche ? <OptionsLanche /> : null }

      <div className = 'menu-opcao'>
        <button onClick = {showOptionsAcomp} herf ='#box1' type = 'submit' className = 'input-pedido' >Acompanhamentos</button>
        <img src = {require("./icones/batata.png")} className ='icone' alt="ícone batata"/>
      </div>
      { showAcomp ? <OptionsAcomp /> : null }

       <div className = 'menu-opcao'>
        <button onClick = {showOptionsBebidas} type = 'submit' className = 'input-pedido'> Bebidas</button>
        <img src = {require("./icones/coca.png")} className ='icone' alt="ícone coca"/>
      </div>
        { showBebidas ? <OptionsBebidas /> : null }

      <div className = 'menu-opcao'>
        <button onClick = {showOptionsCafe} type = 'submit' className = 'input-pedido'>Café da manhã</button>
        <img src = {require("./icones/Coffee.png")}  className ='icone' alt="ícone café"/>
      </div>
      <div  >
      { showCafe ? <OptionsCafe /> : null }
        </div>
    </div>
    <div className = 'total-pedidos'>
     < Mesa/> 
    </div>
    </div >
    </>
  );
};

export default Waitress;