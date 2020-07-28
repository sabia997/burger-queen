import React from 'react';
import { Coffee, MilkCoffee, BreadWithCheese, Juice } from './breakfastMenuOptions';

const BreakFastOptions = () => (
   <React.Fragment>
      <Coffee/>
      <MilkCoffee/>
      <BreadWithCheese/>
      <Juice/>
   </React.Fragment>
);

export default BreakFastOptions;