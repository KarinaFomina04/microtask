import React from 'react';
import { Buttons } from './Buttons';
import { CarsModel } from './CarsModel';
import { UseStateForLearning } from './UseStateForLearning';
import './styles.css';
import { Filter } from './Filter';
import {Input} from './Input';



function App() {
    let topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]
    return (
        <>
            {/* <CarsModel cars={topCars} />
            <Buttons />
            <UseStateForLearning/>
            <Filter/> */}
            <Input/>
        </>
    );
}

export default App;
