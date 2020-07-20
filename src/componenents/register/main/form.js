import React from 'react';

export default class Form extends React.Component {
    
    render(){
        return(
            <div className="form">
                <p>Register</p>
               <input type='text' name = 'email' placeholder ='Email' className = 'input-login'/>
               <input type='password'name = 'senha' placeholder = 'Senha' className = 'input-login' />
               <input type='text'name = 'equipe' placeholder = 'Equipe' className = 'input-login' />
               <button type = 'submit' class = 'input-submit'>Registrar</button>
            </div>
        );
    }
}