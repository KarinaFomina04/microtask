import React from "react";

export type NewComponentProps = {
    currentMoney: Array<NewComponentType>
    onClickFilterHandler: Function

}

export type NewComponentType = {
    banknots: string;
    value: number;
    number: string;
}


export const NewComponentFilter = (props: NewComponentProps) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoney, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoney.banknots} </span>
                            <span> {objFromMoney.value} </span>
                            <span> {objFromMoney.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{ marginLeft: "35px" }}>
                <button onClick={() => props.onClickFilterHandler("All")}>All</button>
                <button onClick={() => props.onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </>
    )
    
}