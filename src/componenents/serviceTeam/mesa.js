import  React from 'react';


export default class Mesa extends React.Component {
    

render(){
    return (
        <div className = "mesa" >
            <label for="quantity">Qual a mesa?</label>
            <input type="number" id="quantity" name="quantity" min="1" max="5"/>
            <div style ={{padding :'50px'}} >*********pedidos**********</div>
            <input type="submit" value="P/ a Cozinha" className = 'inserir-pedido' />
        </div>
            )
        }
    };