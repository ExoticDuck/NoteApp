import React, { ChangeEvent, MouseEvent, useState } from "react";
import s from "./EditableTextField.module.css"

type EditableTextFieldPropsType = {
    text: string
    id: string
    ChangeText: (newValue: string, id: string) => void
}


const EditableTextField = (props: EditableTextFieldPropsType) => {
    let [value, setValue] = useState<string>(props.text);
    let [edit, setEdit] = useState<boolean>(false);



    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    let onDoubleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        setEdit(true);
    }

    let onBlurHandler = () => {
        setEdit(false);
        props.ChangeText(value, props.id);
    }

    if(edit) {
        return(
            <div>
                <textarea name="text" className={s.Textarea} cols={30} rows={10} value={value} onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
            </div>
        )
    } else {
        return(
            <div onDoubleClick={onDoubleClickHandler}>
                <p>
                    {props.text}
                </p>
            </div>
        )
    }
}

export default EditableTextField;