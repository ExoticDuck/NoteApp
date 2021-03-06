import React from "react";
import { NoteType } from "../../App";
import Note from "../Note/Note";
import s from "./NoteDisplay.module.scss"

type NoteDisplayPropsType = {
    notes: Array<NoteType>
    changeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string, noteId: string) => void
    deleteNote: (npteId: string) => void
    changeNoteTitle: (newValue: string, noteId: string) => void
}

const NoteDisplay = React.memo((props: NoteDisplayPropsType) => {
    let MappedNotes = props.notes.map(note => <Note id={note.id} 
        key={note.id}
        name={note.name} 
        tag={note.tag} 
        noteText={note.noteText} 
        addTag={props.addTag}
        ChangeText={props.changeText}
        deleteNote={props.deleteNote}
        changeNoteTitle={props.changeNoteTitle}/>)
    return(
        <div className={s.NoteDisplay}>
            {MappedNotes}
        </div>
    )
})

export default NoteDisplay;