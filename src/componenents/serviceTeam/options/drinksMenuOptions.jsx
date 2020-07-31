import React from 'react';

const SmallWater = () => (
    <React.Fragment>
       <div className="options">
            <div className="checkOptions">
                <input className="menu-checkbox"  type="checkbox" name="smallWater" value="5"/>
                <label className="menu-label" for="smallWater">Água 500ml - R$5</label>
            </div>
        </div>
    </React.Fragment>         
);

const BigWater = () => (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input className="menu-checkbox" type="checkbox" name="bigWater" value="7"/>
                    <label className="menu-label" for="bigWater">Água 750ml - R$7</label>
                </div>
            </div>
        </React.Fragment>         
);

const SmallSoda = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input className="menu-checkbox" type="checkbox" name="SmallSoda" value="7"/>
                <label className="menu-label" for="SmallSoda">Refrigerante 500ml - R$7</label>
            </div>
        </div>
    </React.Fragment>         
);

const BigSoda = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input className="menu-checkbox" type="checkbox" name="bigSoda" value="7"/>
                <label className="menu-label" for="bigSoda">Refrigerante 750ml - R$10</label>
            </div>
        </div>
    </React.Fragment>         
);

export {SmallWater, BigWater, SmallSoda, BigSoda}