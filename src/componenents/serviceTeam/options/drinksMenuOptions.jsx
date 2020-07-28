import React from 'react';

const SmallWater = () => (
    <React.Fragment>
       <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="smallWater" value="5"/>
                <label for="smallWater">Água 500ml - R$5</label>
            </div>
        </div>
    </React.Fragment>         
);

const BigWater = () => (
        <React.Fragment>
            <div className="options">
                <div className="checkOptions">
                    <input type="checkbox" name="bigWater" value="7"/>
                    <label for="bigWater">Água 750ml - R$7</label>
                </div>
            </div>
        </React.Fragment>         
);

const SmallSoda = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="SmallSoda" value="7"/>
                <label for="SmallSoda">Refrigerante 500ml - R$7</label>
            </div>
        </div>
    </React.Fragment>         
);

const BigSoda = () => (
    <React.Fragment>
        <div className="options">
            <div className="checkOptions">
                <input type="checkbox" name="bigSoda" value="7"/>
                <label for="bigSoda">Refrigerante 750ml - R$10</label>
            </div>
        </div>
    </React.Fragment>         
);

export {SmallWater, BigWater, SmallSoda, BigSoda}