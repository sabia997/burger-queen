import  React from 'react';


export  class OptionsLanche extends React.Component {
    

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


export  class OptionsAcomp extends React.Component {
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

export  class OptionsBebidas extends React.Component {
    render(){
        return (
        <div className = "opcao2" >
            <div className = "checkOptions" >
              <input type="checkbox" name="Água500ml" value="5"/>
              <label for="Água500ml"> Água 500ml ____  R$ 5,00</label>
            </div>
            <div className = "checkOptions">
              <input type="checkbox" name="Agua750ml" value="10" />
              <label for="Agua750ml"> Água 750ml ____ R$ 15,00</label>
            </div>
            <div className = "checkOptions">
              <input type="checkbox" name="Refrigerante500ml" value="10" />
              <label for="Refrigerante500ml"> Refrigerante 500ml	 ____ R$ 7,00</label>
            </div>
            <div className = "checkOptions">
              <input type="checkbox" name="Refrigerante750ml" value="10" />
              <label for="Refrigerante750ml"> Refrigerante 750ml ____ R$ 10,00</label>
            </div>
            <input type="submit" value="Inserir pedido" className = 'inserir-pedido' />
        </div>
    
  )
        }
};
export  class OptionsCafe extends React.Component {
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