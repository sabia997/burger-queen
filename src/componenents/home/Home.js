import React from 'react';
import Header from './Header';
import Main from './Main';
import { Link } from 'react-router-dom';

export const Home = () =>(
    <React.Fragment>
        <header>
            <Header/>
        </header>
        <main>
            <Main/>
            <Link to="/register">Register</Link>
        </main>
    </React.Fragment>        
);