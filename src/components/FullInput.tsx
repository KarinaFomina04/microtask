import react, { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let[title, setTitle]=useState("")
    
    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value) //почему я присвоила event.currentTarget.value к title - разобрать проблему
    }

    const onClickButtonHandler =()=>{
        props.addMessage(title)
        setTitle("")
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
      
    )
}