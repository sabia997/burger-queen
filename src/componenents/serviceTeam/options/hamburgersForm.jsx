import React from 'react';
import {SimpleHamburger, DobleHamburger, VeganChicken, VeganCow, VeganCheff, Cheese, Egg} from './hamburgersMenuOption';


const HamburgersOptions = () => (
   <React.Fragment>
       <SimpleHamburger/>
       <DobleHamburger/>
       <VeganChicken/>
       <VeganCow/>
       <VeganCheff/>
       <Cheese/>
       <Egg/>    
   </React.Fragment>
);

export default HamburgersOptions;
