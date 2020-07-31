import React from 'react';

const FrenchFries = () => (
    <React.Fragment>
        <input className="menu-checkbox" type="checkbox" name="frenchFries" value="5"/>
        <label className="menu-label" for="frenchFries">Batata Frita - R$5</label>
    </React.Fragment>         
);


const OnionRings = () => (
        <React.Fragment>
            <input className="menu-checkbox" type="checkbox" name="onionRings" value="5"/>
            <label className="menu-label" for="onionRings">Anéis de Cebola - R$5</label>
        </React.Fragment>         
);

export { FrenchFries, OnionRings }
