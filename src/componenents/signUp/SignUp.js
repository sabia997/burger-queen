import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import firebaseConfig from '../../firebase';
import Logo from '../logo/logo';
import SignUpForm from '../form/signInForm';
import { Link } from 'react-router-dom';
import setUserTeam from './SetUserTeam';
import authErrors from '../../firebaseError'
import Modal from 'react-modal'



const SignUp  = ({ history }) => {
    const [erros, seterros] = useState('');
    const [modal, setModal] = useState(false);
    const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, select } = event.target.elements;
    try {
        await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        setUserTeam(select.value)
        if(select.value === 'kitchen'){
            history.push('/kitchen');
        } else {
            history.push('/waitress');
        } 
    } catch (error) {
        seterros(authErrors[error.code])
      //  alert(error.code)
        setModal(true)
    }
}, [history]);
Modal.setAppElement('#root');
        return(
            <React.Fragment>
                 <Modal className='Modal' isOpen={modal}>
                <h2>Ops!</h2><br />
                <p className='modalInstructions'>{erros}</p><br />
                <button className='input-order' onClick={() => setModal(false)}> Ok</button>
            </Modal>
                <div className="position-screen">
                    <header>
                        <Logo/>
                    </header>
                    <main>
                        <form onSubmit={handleSignUp} className="login">
                            <SignUpForm/>
                        </form>
                        <div className="link">
                            <Link className="link" to="/home">Voltar para a página de login</Link>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    } 

export default withRouter(SignUp);
