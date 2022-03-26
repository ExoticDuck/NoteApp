import React, { useCallback } from "react";
import s from "./Tag.module.scss"

type TagPropsType = {
    name: string
    id: string
    selected: boolean
    deleteTag: (id: string) => void
    selectTag: (tagName: string) => void
}

const Tag = (props: TagPropsType) => {
    let {name, id, selected, deleteTag, selectTag} = props

    let onTagClickHandler = useCallback(() => {selectTag(name)}, [selectTag, name]);
    let onButtonClickHandler = useCallback(() => {deleteTag(id)}, [deleteTag, id]);
    
    return(
        <div className={selected ? s.SelectedTag : s.Tag}>
            <div className={s.tagName} onClick={onTagClickHandler}>{name}</div><div className={s.button} onClick={onButtonClickHandler}>X</div>
        </div>
    )
}

export default Tag;