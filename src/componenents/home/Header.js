import React from 'react';
import Logo from './header/logo';

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Logo/>
            </React.Fragment>        
        )

    }
}