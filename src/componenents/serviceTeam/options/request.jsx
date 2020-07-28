import  React from 'react';

const Request = () => (
        <React.Fragment>
            <div className = "request-resume" >
                <label for="quantity">Qual a mesa?</label>
                <input type="number" id="quantity" name="quantity" min="1" max="5"/>
                <input type="submit" value="P/ a Cozinha" className = 'inserir-pedido' />
            </div>
        </React.Fragment>         
);

export default Request;