import React from "react";
import { TagType } from "../../App";
import Tag from "./Tag/Tag";
import s from "./TagsDisplay.module.scss"

type TagsPropsType = {
    tags: Array<TagType>
    deleteTag: (id: string) => void
    selectTag: (tagName: string) => void
}


const TagsDisplay = React.memo((props: TagsPropsType) => {

    let mappedTags = props.tags.map(tag => <Tag key={tag.id} name={tag.tagName} id={tag.id} deleteTag={props.deleteTag} selected={tag.selected} selectTag={props.selectTag}/>)
    return(
        <div className={s.TagsDisplay}>
            {mappedTags}
        </div>
    )
})

export default TagsDisplay;