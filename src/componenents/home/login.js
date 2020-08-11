<<<<<<< HEAD
import React, { useCallback,useState } from 'react';
=======
import React, { useCallback, useState } from 'react';
>>>>>>> d2efb34226c75638df4cfc5293d419406abb151b
import { withRouter, Link } from 'react-router-dom';
import firebaseConfig from '../../firebase';
import Logo from '../logo/logo';
import LoginForm from '../form/Loginform';
import Modal from 'react-modal'
import authErrors from './firebaseError'
<<<<<<< HEAD


const Login = ({
        history
    }) => {
        const [erros, seterros] = useState('')
        const [modal, setModal] = useState(false)
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
                        } catch (error) {
                            console.log(console.error.code);
                        }
                    } catch (error) {
                        seterros(authErrors[error.code])
                        //alert(error.code);
                        setModal(true)
                    }
                },
                [history]
        );
        Modal.setAppElement('#root')
        return(
        <React.Fragment>
            <Modal className = 'Modal' isOpen={modal}>
              <h2>Ops!</h2><br/>
              <p className = 'modalInstructions'>{erros}</p><br/>
              <button className= 'input-request' onClick = {() => setModal(false)}> Ok</button>
=======

const Login = ({
    history
}) => {
    const [erros, seterros] = useState('')
    const [modal, setModal] = useState(false)
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
                } catch (error) {
                    console.log(console.error.code);
                }
            } catch (error) {
                seterros(authErrors[error.code])
                //alert(error.code);
                setModal(true)
            }
        },
        [history]
    );
    Modal.setAppElement('#root')
    return (
        <React.Fragment>
            <Modal className='Modal' isOpen={modal}>
                <h2>Ops!</h2><br />
                <p className='modalInstructions'>{erros}</p><br />
                <button className='input-request' onClick={() => setModal(false)}> Ok</button>
>>>>>>> d2efb34226c75638df4cfc5293d419406abb151b
            </Modal>
            <div className="position-screen">
                <header className="header-logo">
                    <Logo />
                </header>
                <main>
                    <form onSubmit={handleLogin} className="login">
                        <LoginForm />
                    </form>
                    <Link className="link" to="/SignUp">Não tem conta? Registre-se aqui!</Link>
                </main>
            </div>
        </React.Fragment>
    );

};

export default withRouter(Login);