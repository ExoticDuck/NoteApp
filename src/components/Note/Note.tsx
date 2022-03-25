import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import EditableTextField from "./EditableTextField/EditableTextField";
import s from './Note.module.css';

type NotePropsType = {
    id: string
    name: string
    tag: string
    noteText: string
    ChangeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string, noteId: string) => void
    deleteNote: (npteId: string) => void
}


const Note = React.memo((props: NotePropsType) => {
    
    let addTagCallback = (tagName: string) => {props.addTag(tagName, props.id)}
    
    return(
        <div className={s.NoteCard}>
            <h3 className={s.NoteTitle}>{props.name}</h3>
            <IconButton onClick={() => props.deleteNote(props.id)}>
                <Delete/>
            </IconButton>
            <div className={s.NoteTag}>{props.tag}</div>
            {/* <div>
                {props.noteText}
            </div> */}
            <EditableTextField 
            text={props.noteText} 
            addTag={addTagCallback}
            ChangeText={props.ChangeText} 
            id={props.id}/>
        </div>
    )
})

export default Note;