import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import s from "./EditableSpan.module.scss"

type EditableSpanPropsType = {
    value: string
    onChange: (title: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>(props.value)
    function doubleClickHandler() {
        setEditMode(true);
    }

    function activateViewMode() {
        setEditMode(false)
        props.onChange(title);
    }
    
    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value);
    }

    return(
        editMode ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/> :
        <span onDoubleClick={doubleClickHandler} className={s.NoteTitle}>{props.value}</span>
    )
}

export default EditableSpan;