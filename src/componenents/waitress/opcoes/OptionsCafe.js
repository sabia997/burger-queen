import React from 'react'

export default  class OptionsCafe extends React.Component {
    render(){
        return (
        <div className = "opcao2" >
            <div className = "checkOptions">
                <input type="checkbox" name="Caféamericano" value="5"/>
                <label for="Caféamericano"> Café americano ____ R$ 5,00</label>
            </div>
            <div className = "checkOptions">
                <input type="checkbox" name="CaféComLeite	" value="7" />
                <label for="CaféComLeite"> Café com leite	____ R$ 7,00</label>
            </div>
            <div className = "checkOptions">
                <input type="checkbox" name="MistoQuente" value="7" />
                <label for="MistoQuente"> Misto Quente ____ R$ 10,00</label>
            </div>
            <div className = "checkOptions">
                <input type="checkbox" name="SucoNatural" value="7" />
                <label for="SucoNatural"> Suco de fruta natural	 ____ R$ 7,00</label>
            </div>
            <input type="submit" value="Inserir pedido" className = 'inserir-pedido' />
        </div>
  )
        }
    };