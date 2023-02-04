import React from 'react';
import {CarsModel } from './CarsModel';


function App() {
    let topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
      ]
    return (
        <CarsModel cars={topCars}/>
    );
}

export default App;
