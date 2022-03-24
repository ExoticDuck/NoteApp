import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "./AddItemForm.module.css"


type AddItemPropsType = {
addNote: (title:string) => void
}

const AddItemForm = React.memo((props: AddItemPropsType) => {
    let [value, setValue] = useState<string>("")

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    let addItem = () => {
        if(value.trim() !== "") {
            props.addNote(value);
            setValue("")
        }
    }
    return(
        <div className={s.AddItemForm}>
            <input type="text" value={value} onChange={onChangeHandler} className={s.Input} placeholder="Note Name"/> <button onClick={addItem}>+</button>
        </div>
    )
});

export default AddItemForm;