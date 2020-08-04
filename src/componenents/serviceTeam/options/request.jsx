import  React from 'react';
import TableSelected from './printTable'
import DropMenu from './SelectTable'


const Request = () => {
  
    return(
        <React.Fragment>
            <div className = "request-resume" >
                <DropMenu/>
                <TableSelected/>
                <input type="submit" value='Enviar para a Cozinha' className = 'inserir-pedido' />
            </div>
        </React.Fragment>         
);
}

export default Request;