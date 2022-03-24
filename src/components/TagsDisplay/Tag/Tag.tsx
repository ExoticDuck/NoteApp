import React from "react";
import s from "./Tag.module.css"

type TagPropsType = {
    name: string
    id: string
    deleteTag: (id: string) => void
}



const Tag = (props: TagPropsType) => {
    
    return(
        <div className={s.Tag}>
            {props.name} <div className={s.button} onClick={() =>{props.deleteTag(props.id)}}>X</div>
        </div>
    )
}

export default Tag;