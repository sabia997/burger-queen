import React from 'react';
import Header from './Header';

//import { Link } from 'react-router-dom';

export const Cooker = () =>(
    <React.Fragment>
        <header>
            <Header/>
            <button onClick = {() => app.auth().signOut()}>Sair</button>
        </header>
    </React.Fragment>        
);