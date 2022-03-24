import React from "react";
import { NoteType } from "../../App";
import Note from "../Note/Note";
import s from "./NoteDisplay.module.css"

type NoteDisplayPropsType = {
    notes: Array<NoteType>
    changeText: (newValue: string, id: string) => void
}

const NoteDisplay = React.memo((props: NoteDisplayPropsType) => {
    let MappedNotes = props.notes.map(note => <Note id={note.id} name={note.name} tag={note.tag} noteText={note.noteText} ChangeText={props.changeText}/>)
    return(
        <div className={s.NoteDisplay}>
            {MappedNotes}
        </div>
    )
})

export default NoteDisplay;