import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseConfig from '../../../firebase';
import Logo from '../../home/header/logo';
import {  Link } from 'react-router-dom';

const SignUp  = ({ history }) => {
    const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
        await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        history.push('/waitress');
    } catch (error) {
        alert(error);
    }
}, [history]);

        return(
            <main>
            <Logo/>
                <form onSubmit={ handleSignUp }>
                    <p>Register</p>
                <input type='text' name = 'email' placeholder ='Email' className = 'input-login'/>
                <input type='password'name = 'senha' placeholder = 'Senha' className = 'input-login' />
                <input type='text'name = 'equipe' placeholder = 'Equipe' className = 'input-login' />
                <button type = 'submit' className = 'input-submit'>Registrar</button>
                </form>
                <Link to="/home">Voltar para a página de login</Link>
            </main>
        );
    } 

export default withRouter(SignUp);
