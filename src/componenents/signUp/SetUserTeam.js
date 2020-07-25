//import React from 'react';
import firebaseConfig from '../../firebase';

const setUserTeam = ( async value => {
    const db = firebaseConfig.firestore();
    try {
            db.collection('users_teams').add({
            user: firebaseConfig.auth().currentUser.uid,
            text: value,
            date: new Date().toLocaleString(),
        });
    } catch (erro) {
        console.log(erro);
    }
});

export default setUserTeam;
