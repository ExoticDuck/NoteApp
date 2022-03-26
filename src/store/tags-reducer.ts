import { v1 } from "uuid"
import { TagType } from "../App"
import tagData from "../Data/tagData.json"

const SELECT_TAG = "SELECT-TAG"
const ADD_TAG = "ADD-TAG"
const DELETE_TAG = "DELETE-TAG"

let initialState = tagData.map(tag => {
    return {
        ...tag, id: v1()
    }
})

export const tagsReducer = (state: Array<TagType> = initialState, action: ActionsType) => {
    switch (action.type) {
        case SELECT_TAG: {
            let newTags = state.map(tag => tag.tagName === action.payload.tagName ? {...tag, selected: !tag.selected} : {...tag, selected: false})
            return newTags;
        }
        case ADD_TAG: {
            let newTags = state; 
            let double = newTags.find(tag => tag.tagName === action.payload.tagName);
            if(double === undefined) {
                newTags = [...state, {id: v1(), tagName: action.payload.tagName, selected: false}]
                return newTags;
            } else return state;
        }
        case DELETE_TAG: {
            let newTags = state.filter(tag => tag.id !== action.payload.tagId);
            return newTags;
        }
        default:
            return state;
    }

}

type ActionsType = selectTagACType | addTagACType | deleteTagACType;

export type selectTagACType = ReturnType<typeof selectTagAC>
export function selectTagAC(tagName: string) {
    return {
        type: SELECT_TAG,
        payload: {
            tagName
        }
    } as const
}
export type addTagACType = ReturnType<typeof addTagAC>
export function addTagAC(tagName: string) {
    return {
        type: ADD_TAG,
        payload: {
            tagName
        }
    } as const
}
export type deleteTagACType = ReturnType<typeof deleteTagAC>
export function deleteTagAC(tagId: string) {
    return {
        type: DELETE_TAG,
        payload: {
            tagId
        }
    } as const
}