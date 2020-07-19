import React from 'react';

export default class Login extends React.Component {
    
    render(){
        return(
            <div className="login">
               <input type='text' name = 'email' placeholder ='Email' class = 'input-login'/>
               <input type='password'name = 'senha' placeholder = 'Senha' class = 'input-login' />
               <button type = 'submit' class = 'input-submit'>Entrar</button>
            </div>
        );
    }
}