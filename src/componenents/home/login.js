import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import firebaseConfig from '../../firebase';
import { AuthContext } from './auth';
import Logo from '../logo/logo';

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
    <main>
    <Logo/>
    <div>
        <form onSubmit={handleLogin} className="login" >
            <input type='text' name = 'email' placeholder ='Email' className = 'input-login'/>
            <input type='password'name = 'password' placeholder = 'Senha' className = 'input-login' />
            <button type = 'submit' className = 'input-submit'>Entrar</button>
            <Link to="/signup">Não tem uma conta? Registre-se</Link>
        </form>
    </div>
    </main>
);

};

export default withRouter(Login);
