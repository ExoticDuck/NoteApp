import { combineReducers, createStore } from "redux"
import { notesReducer } from "./notes-reducer"
import { tagsReducer } from "./tags-reducer"


const rootReducer = combineReducers({
    tags: tagsReducer,
    notes: notesReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>