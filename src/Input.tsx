import react, { useState } from "react";
import { Button } from "./components/Button";
import { FullInput } from "./components/FullInput";
import { InputComponent } from "./components/InputComponent";

export function Input() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let[title, setTitle]=useState("")
    console.log(title)

const addMessage = (title: string)  =>{
   let newMessage =  {message: title};
    setMessage([newMessage, ...message])
} 

const callBackButtonHandler = () => {
    addMessage(title)
    setTitle("")
}

    return (
        <div className={'App'}>
            {/* <div>
                <input/>
                <button>+</button>
            </div> */}
            {/* <FullInput addMessage={addMessage}/> */}
            <InputComponent setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>
    )
}
