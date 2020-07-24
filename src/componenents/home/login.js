import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import firebaseConfig from '../../firebase';
import { AuthContext } from './auth';
import Logo from '../logo/logo';
import LoginForm from '../form/Loginform';

const Login = ({history}) => {
const handleLogin = useCallback(
    async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
        await firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/")
        } catch(error) {
            alert(error);
        }
    },
    [history]
);

    const{currentUser} = useContext(AuthContext);

    if (currentUser){
        return <Redirect to="/waitress"/>
    }

    return(
        <>
            <header>
                <Logo/>
            </header>
            <main>
                <form onSubmit={handleLogin} className="login">
                    <LoginForm/>
                </form>
                <Link to="/SignUp">Não tem conta? Registre-se aqui!</Link>
            </main>
        </>
    );

};

export default withRouter(Login);
