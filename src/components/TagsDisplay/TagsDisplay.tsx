import React from "react";
import { TagType } from "../../App";
import Tag from "./Tag/Tag";
import s from "./TagsDisplay.module.css"

type TagsPropsType = {
    tags: Array<TagType>
    deleteTag: (id: string) => void
}


const TagsDisplay = (props: TagsPropsType) => {

    let mappedTags = props.tags.map(tag => <Tag key={tag.id} name={tag.tagName} id={tag.id} deleteTag={props.deleteTag}/>)
    return(
        <div className={s.TagsDisplay}>
            {mappedTags}
        </div>
    )
}

export default TagsDisplay;