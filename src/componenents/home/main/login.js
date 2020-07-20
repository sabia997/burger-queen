import React from 'react';

export default class Login extends React.Component {
    
    render(){
        return(
            <div className="login">
               <input type='text' name = 'email' placeholder ='Email' className = 'input-login'/>
               <input type='password'name = 'senha' placeholder = 'Senha' className = 'input-login' />
               <button type = 'submit' className = 'input-submit'>Entrar</button>
            </div>
        );
    }
}