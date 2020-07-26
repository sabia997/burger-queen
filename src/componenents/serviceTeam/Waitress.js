import React, { useCallback } from 'react';
import firebaseConfig from '../../firebase';

const Waitress = ({history}) => {
    const handleLogout = useCallback(
        async event => {
            event.preventDefault();
            firebaseConfig.auth().signOut().then(function() {
                alert("Você foi deslogado");
                history.push("/home")
              }).catch(function(error) {
                alert(error);
              });
        },
        [history],
    )
    return(
        <React.Fragment>
        <h1>Waitress</h1>
        <button onClick={handleLogout}>SAIR</button>
        </React.Fragment>
    )   
};

export default Waitress;
