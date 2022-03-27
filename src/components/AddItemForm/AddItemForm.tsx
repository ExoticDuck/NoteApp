import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import s from "./AddItemForm.module.scss"


type AddItemPropsType = {
addNote: (title:string) => void
}

const AddItemForm = React.memo((props: AddItemPropsType) => {

    let {addNote} = props
    let [value, setValue] = useState<string>("")
    let [error, setError] = useState<string | null>(null);

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(error) setError(null)
        setValue(e.currentTarget.value)
    }

    let addItem = useCallback(() => {
        if(value.trim() !== "") {
            setError(null);
            addNote(value); 
            setValue("");
    } else {
        setError("Title is required!");
    }},[addNote, value])
    return(
        <div className={s.AddItemForm}>
            <input type="text" value={value} onChange={onChangeHandler} className={s.Input} placeholder="Note Name"/><button onClick={addItem}>+</button>
            {error && <div className={s.Error}>{error}</div>}
        </div>
    )
});

export default AddItemForm;