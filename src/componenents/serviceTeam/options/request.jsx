import  React from 'react';

const Request = () => (
        <React.Fragment>
            <div className = "request-resume" >
                <input className="input-desk-number"type="number" id="deskNumber" name="quantity" min="1" max="5"/>
                <label for="deskNumber">Número da mesa</label>
                <input className="input-client-name" type="string" id="clientName"/>
                <label for="clientName">Nome do cliente</label>
                <input type="button" className='button-send-to-kitchen'/>
            </div>
        </React.Fragment>         
);

export default Request;