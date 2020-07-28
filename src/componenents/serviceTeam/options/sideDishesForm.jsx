import React from 'react';
import { FrenchFries, OnionRings } from './sideDishesMenuOptions';

const SideDishesOptions = () => (
   <React.Fragment>
       <div className="options">
            <div className="checkOptions">
                <FrenchFries/>
                <OnionRings/>
            </div>
       </div>
   </React.Fragment>
);

export default SideDishesOptions;