import React from 'react';

const SelectTeam = () => (
    <React.Fragment>
        <p className="text">Selecione sua equipe:</p>
        <select className="select-team" name="select">
            <option name="kitchen" value="kitchen">Cozinha</option> 
            <option name="service" value="service">Time de Serviço</option>
        </select>
    </React.Fragment>
);

export default SelectTeam;