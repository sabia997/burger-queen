import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import firebaseConfig from '../../firebase';
import Logo from '../logo/logo';
import LoginForm from '../form/Loginform';

const Login = ({
        history
    }) => {
        const handleLogin = useCallback(
            async event => {
                    event.preventDefault();
                    const {
                        email,
                        password
                    } = event.target.elements;
                    try {
                        await firebaseConfig
                            .auth()
                            .signInWithEmailAndPassword(email.value, password.value)
                        const db = firebaseConfig.firestore();
                        try {
                            const user = firebaseConfig.auth().currentUser;
                            db.collection('users_teams')
                                .where('user', '==', user.uid)
                                .get()
                                .then(function (docs) {
                                    docs.forEach(function (doc) {
                                        if (doc.data().team === "kitchen") {
                                            history.push("/kitchen")
                                        } else {
                                            history.push("/waitress")
                                        }
                                    })
                                })
                        } catch (erro) {
                            console.log(erro);
                        }

                    } catch (error) {
                        alert(error);
                    }
                },

                [history]
        );

    return(
        <React.Fragment>
            <div className="position-screen">
                <header className="header-logo">
                    <Logo/>
                </header>
                <main>
                    <form onSubmit={handleLogin} className="login">
                        <LoginForm/>
                    </form>
                    <Link className="link" to="/SignUp">Não tem conta? Registre-se aqui!</Link>
                </main>
            </div>
        </React.Fragment>
    );

};

export default withRouter(Login);
