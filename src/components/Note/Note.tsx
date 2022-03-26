import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useCallback } from "react";
import EditableTextField from "./EditableTextField/EditableTextField";
import s from './Note.module.scss';
import EditableSpan from './../EditableSpan/EditableSpan';

type NotePropsType = {
    id: string
    name: string
    tag: string
    noteText: string
    ChangeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string, noteId: string) => void
    deleteNote: (npteId: string) => void
    changeNoteTitle: (newValue: string, noteId: string) => void
}


const Note = React.memo((props: NotePropsType) => {
    let {id, name, tag, noteText, ChangeText, addTag, deleteNote, changeNoteTitle} = props
    
    let addTagCallback = useCallback((tagName: string) => {addTag(tagName, id)}, [addTag, id])
    let changeNoteTitleCallback = useCallback((newValue: string) => {changeNoteTitle(newValue, id)}, [changeNoteTitle, id])
    
    return(
        <div className={s.NoteCard}>
            <EditableSpan value={name} onChange={changeNoteTitleCallback}/>
            <IconButton onClick={() => deleteNote(id)}>
                <Delete/>
            </IconButton>
            <EditableTextField 
            tag={tag}
            text={noteText} 
            addTag={addTagCallback}
            ChangeText={ChangeText} 
            id={props.id}/>
            <div className={s.NoteTag}>{tag}</div>
            {/* <Edtf
            tag={tag}
            text={noteText} 
            addTag={addTagCallback}
            ChangeText={ChangeText} 
            id={props.id}/>
            <div className={s.NoteTag}>{tag}</div> */}
        </div>
    )
})

export default Note;