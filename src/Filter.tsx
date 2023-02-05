import React, { MouseEvent, useState } from "react";
import { NewComponentFilter } from "./components/NewComponentFilter";

type FilterType = "All" | 'RUBLS' | 'Dollars'

export const Filter = () => {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    if (filter === "Dollars") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS")
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
      setFilter(nameButton)
        
    }

    return (
        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoney, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span> {objFromMoney.banknots} </span>
        //                     <span> {objFromMoney.value} </span>
        //                     <span> {objFromMoney.number} </span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft:"35px"}}>
        //         <button onClick={() => onClickFilterHandler("All")}>All</button>
        //         <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
        //         <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
        //     </div>
        // </>
        <NewComponentFilter onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
    )

}

