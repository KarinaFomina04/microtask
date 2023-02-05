import React, { MouseEvent } from "react";
import { Button } from "./components/Button";

export const UseStateForLearning = () => {
    // let a = 1

    let [a, setA] = React.useState(1)

    const onClickHandler = () => {
            setA(++a);
            console.log(a)
    }

    const onClickHandlerZero = () => {
        setA(0);
        console.log(0)
    }

    return (
        <div>
            <h1>
                {a}
            </h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerZero}>0</button>
        </div>
    )

}