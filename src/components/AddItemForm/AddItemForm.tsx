import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import s from "./AddItemForm.module.scss"


type AddItemPropsType = {
addNote: (title:string) => void
}

const AddItemForm = React.memo((props: AddItemPropsType) => {

    let {addNote} = props
    let [value, setValue] = useState<string>("")

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    let addItem = useCallback(() => {if(value.trim() !== "") {addNote(value); setValue("")}},[addNote, value])
    return(
        <div className={s.AddItemForm}>
            <input type="text" value={value} onChange={onChangeHandler} className={s.Input} placeholder="Note Name"/><button onClick={addItem}>+</button>
        </div>
    )
});

export default AddItemForm;