import React from 'react';

const SimpleHamburger = () => (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input className="menu-checkbox"type="checkbox" name="simpleHamburger" value="10"/>
                    <label className="menu-label" for="simpleHamburger">"Hamburguer Simples - R$10 " value="10"</label>
                </div>
            </div>
        </React.Fragment>         
);

const DobleHamburger = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="dobleHamburger" value="15"/>
                <label for="dobleHamburger">Hamburguer Duplo - R$15</label>
            </div>
        </div>
    </React.Fragment>         
);

const VeganChicken = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox"name="veganChicken"value="0"/>
                <label for="veganChicken">Vegan Chicken</label>
            </div>
        </div>
    </React.Fragment>         
);

const VeganCow = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="veganCow" value="0"/>
                <label for="veganCow">Vegan Cow</label>
            </div>
        </div>
    </React.Fragment>         
);

const VeganCheff = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="veganCheff" value="0"/>
                <label for="veganCheff">Vegan Cheff</label>
            </div>
        </div>
    </React.Fragment>         
);

const Cheese = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="cheese" value="1"/>
                <label for="cheese">Fatia Adicional de queijo - R$1</label>
            </div>
        </div>
    </React.Fragment>         
);

const Egg = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="egg" value="1"/>
                <label for="egg">Adicional Ovo vegan do cheef R$1</label>
            </div>
        </div>
    </React.Fragment>         
);


export {SimpleHamburger, DobleHamburger, VeganChicken, VeganCow, VeganCheff, Cheese, Egg}