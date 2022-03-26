import { v1 } from "uuid"
import { NoteType } from "../App"
import noteData from "../Data/noteData.json"

const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const CHANGE_NOTE = "CHANGE-NOTE";
const CHANGE_NOTE_TITLE = "CHANGE_NOTE_TITLE";

const initialState = noteData.map(note => {
    return {
        ...note, id: v1()
    }
})

export const notesReducer = (state: Array<NoteType> = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NOTE: {
            let newNotes = [...state, { id: v1(), name: action.payload.title, tag: "#all", noteText: "Enter some text" }]
            return newNotes;
        }
        case DELETE_NOTE: {
            let newNotes = state.filter(note => note.id !== action.payload.noteId)
            return [...newNotes]
        }
        case CHANGE_NOTE: {
            let newNotes = state.map(note => note.id === action.payload.noteId ? { ...note, noteText: action.payload.newValue, tag: action.payload.newTag } : note)
            return [...newNotes]
        }
        case CHANGE_NOTE_TITLE : {
            let newNotes = state.map(note => note.id === action.payload.noteId ? {...note, name: action.payload.newValue} : note);
            return [...newNotes]
        }
        default:
            return state
    }
}

export type ActionsType = addNoteACType | deleteNoteACType | changeNoteACType | changeNoteTitleACType;

export function addNoteAC(title: string) {
    return {
        type: ADD_NOTE,
        payload: {
            title
        }
    } as const
}
export type addNoteACType = ReturnType<typeof addNoteAC>

export function deleteNoteAC(noteId: string) {
    return {
        type: DELETE_NOTE,
        payload: {
            noteId
        }
    } as const
}
export type deleteNoteACType = ReturnType<typeof deleteNoteAC>

export function changeNoteAC(newValue: string, noteId: string, newTag: string) {
    return {
        type: CHANGE_NOTE,
        payload: {
            newValue,
            noteId,
            newTag
        }
    } as const
}
export type changeNoteACType = ReturnType<typeof changeNoteAC>

export function changeNoteTitleAC(newValue: string, noteId: string) {
    return {
        type: CHANGE_NOTE_TITLE,
        payload: {
            newValue,
            noteId
        }
    } as const
}
export type changeNoteTitleACType = ReturnType<typeof changeNoteTitleAC>

