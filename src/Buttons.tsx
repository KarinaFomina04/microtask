import React, { MouseEvent } from "react";
import { Button } from "./components/Button";



export const Buttons = () => {

    // const myFirstSUB = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I am first")  
    // }
    // const myNextSUB = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello I am next")  
    // }
    // const onClickHandler =(name: string)=> {
    //     console.log(name)
    // }
    // const click3 = () => {
    //          console.log(123)  
    //     }
    //     const click4 = (num:number) => {
    //         console.log(num)  
    //    }
    const Button1Foo = (name:string, age: number, address: string) => {
        console.log(name, age, address)
    }

    const Button2Foo = (name:string) => {
        console.log(name)
    }

    const Button3Foo = () => {
        console.log("I'm stuped button")
    }



    return (
        <div>
            {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => (console.log("Hello!"))}>Click-1</button> 
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Petiya")}>Click-2</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Saniya")}>Click-3</button>  */}
            {/* <button onClick={click3}>Click-3</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => click4(124)}>Click-4</button>  */}
            {/* <button>Click1</button>
            <button>Click2</button> */}
            <Button name={'Click1'} callBack={() => Button1Foo("I'm Vasiya", 18, "live in Minsk")}/>
            <Button name={'Click2'} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={'Click3'} callBack={Button3Foo}/>

        </div>
    );
};