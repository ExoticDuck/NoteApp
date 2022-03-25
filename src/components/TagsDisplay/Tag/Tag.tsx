import React from "react";
import s from "./Tag.module.css"

type TagPropsType = {
    name: string
    id: string
    selected: boolean
    deleteTag: (id: string) => void
    selectTag: (tagName: string) => void
}

const Tag = (props: TagPropsType) => {
    
    return(
        <div className={props.selected ? s.SelectedTag : s.Tag}>
            <div className={s.tagName} onClick={() => props.selectTag(props.name)}>{props.name}</div><div className={s.button} onClick={() =>{props.deleteTag(props.id)}}>X</div>
        </div>
    )
}

export default Tag;