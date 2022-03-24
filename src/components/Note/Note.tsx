import React from "react";
import EditableTextField from "./EditableTextField/EditableTextField";
import s from './Note.module.css';

type NotePropsType = {
    id: string
    name: string
    tag: string
    noteText: string
    ChangeText: (newValue: string, id: string) => void
}

const Note = React.memo((props: NotePropsType) => {
    return(
        <div className={s.NoteCard}>
            <h3 className={s.NoteTitle}>{props.name}</h3>
            <div className={s.NoteTag}>{props.tag}</div>
            {/* <div>
                {props.noteText}
            </div> */}
            <EditableTextField text={props.noteText} ChangeText={props.ChangeText} id={props.id}/>
        </div>
    )
})

export default Note;