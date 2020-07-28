import React from 'react';

const FrenchFries = () => (
    <React.Fragment>
        <input type="checkbox" name="frenchFries" value="5"/>
        <label for="frenchFries">Batata Frita - R$5</label>
    </React.Fragment>         
);


const OnionRings = () => (
        <React.Fragment>
            <input type="checkbox" name="onionRings" value="5"/>
            <label for="onionRings">Anéis de Cebola - R$5</label>
        </React.Fragment>         
);

export { FrenchFries, OnionRings }