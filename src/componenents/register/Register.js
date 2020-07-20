import React from 'react';
import Header from '../home/Header';
import MainRegister from './MainRegister'
import { Link } from 'react-router-dom';

export const Register = () => (
    <React.Fragment>
        <header>
            <Header/>
        </header>
        <main>
            <MainRegister/>
            <Link to="/">Back to login</Link>
        </main>
    </React.Fragment>          
);