
import React from 'react'

export default class OptionsAcomp extends React.Component {
    render(){
        return (
        <div className = "opcao2" >
          <div className = "checkOptions">
                <input type="checkbox" name="BatataFrita" value="5"/>
                <label for="BatataFrita"> Batata frita____ R$ 5,00</label>
          </div>
          <div className = "checkOptions">
                <input type="checkbox" name="AnéisDeCebola" value="10" />
                <label for="AnéisDeCebola"> Anéis de cebola	____ R$ 5,00</label>
          </div>
          <input type="submit" value="Inserir pedido" className = 'inserir-pedido' />
        </div>
  )       }
};


