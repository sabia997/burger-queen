import React from 'react';

const Coffee = () => (
    <React.Fragment>
    <div className="options">
        <div className="checkOptions">
            <input type="checkbox" name="coffee" value="5"/>
            <label for="coffee">Café - R$5</label>
        </div>
    </div>
    </React.Fragment>         
);


const MilkCoffee = () => (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input type="checkbox" name="milkCoffee" value="7"/>
                    <label for="milkCoffee">Café com Leite - R$7</label>
                </div>
            </div>
        </React.Fragment>         
);

const BreadWithCheese = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="breadWithCheese" value="10"/>
                <label for="breadWithCheese">Misto Quente - R$10</label>
            </div>
        </div>
    </React.Fragment>         
);

const Juice = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="juice" value="10"/>
                <label for="juice">Suco de Frutas- R$7</label>
            </div>
        </div>
    </React.Fragment>         
);

export { Coffee, MilkCoffee, BreadWithCheese, Juice }