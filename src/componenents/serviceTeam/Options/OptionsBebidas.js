import  React from 'react';

export default  class OptionsBebidas extends React.Component {
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
        </div>
    
  )
        }
};