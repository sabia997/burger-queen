import React from 'react';
import Header from '../home/Header';
import MainRegister from './MainRegister'
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <Header/>
                </header>
                <main>
                    <MainRegister/>
                    <Link to="/">Back to login</Link>
                </main>
            </React.Fragment>        
        )

    }
}