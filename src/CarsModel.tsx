import React from 'react';

export type CarsPropsType = {
    cars: Array<CarsType>
}

export type CarsType = {
    manufacturer: string;
    model: string;
}


export const CarsModel = (props: CarsPropsType) => {
    return (
        <>
            <table >
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {
                    props.cars.map((el, index: number) =>
                            <tr key={index}>
                                <td>{index + 1}. {el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>

                    )
                }
            </table>
        </>
    );
};