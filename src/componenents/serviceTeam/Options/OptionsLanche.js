import  React from 'react';


export default class OptionsLanche extends React.Component {
   

render(){
    return (
        <div className = "opcao2" >
            <div className =  "checkOptions">
                <input type="checkbox" name="HamburgerSimple" value="15"/>
                <label for="HamburgerSimple"> Hambúrguer Simples  R$ 10,00</label>
            </div>
            <div className =  "checkOptions">
                <input type="checkbox" name="HamburgerDuplo" value="10" />
                <label for="HamburgerDuplo"> Hambúrguer Duplo R$ 15,00</label>
            </div>
            <input type="submit" value="Inserir pedido" className = 'inserir-pedido' />
        </div>
            )
        }
    };