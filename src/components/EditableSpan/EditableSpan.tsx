import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import s from "./EditableSpan.module.scss"

type EditableSpanPropsType = {
    value: string
    onChange: (title: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>(props.value);
    let [error, setError] = useState<string | null>(null);
    function doubleClickHandler() {
        setEditMode(true);
    }

    function activateViewMode() {
        if(title.trim() !== "") {
            setEditMode(false)
            props.onChange(title);
        } else setError("Title is required!");
    }
    
    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        if(error) setError(null);
        setTitle(e.currentTarget.value);
    }

    return(
        editMode ? <TextField value={title} onChange={changeTitle} autoFocus error={!!error} helperText={error} onBlur={activateViewMode}/> :
        <span onDoubleClick={doubleClickHandler} className={s.NoteTitle}>{props.value}</span>
    )
}

export default EditableSpan;