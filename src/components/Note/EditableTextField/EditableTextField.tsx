import React, { ChangeEvent, FormEvent, FormEventHandler, MouseEvent, useState } from "react";
import s from "./EditableTextField.module.css"
// import { HighlightWithinTextarea } from 'react-highlight-within-textarea';

type EditableTextFieldPropsType = {
    text: string
    id: string
    tag: string
    ChangeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string) => void
}


const EditableTextField = (props: EditableTextFieldPropsType) => {
    let [value, setValue] = useState<string>(props.text);
    let [edit, setEdit] = useState<boolean>(false);



    let onChangeHandler = (e: FormEvent<HTMLDivElement>) => {
       
        console.log(e.currentTarget.innerHTML);
        setValue(e.currentTarget.innerText)
        
    }

    let getNewTag = () => {
        let hashTagIndex = value.indexOf("#");
        if (hashTagIndex === -1) {
            props.addTag("#all")
            props.ChangeText(value, props.id, "#all");
        } else {
            let result = ""
            for (let i = hashTagIndex; i < value.length; i++) {
                if (value[i] !== " ") {
                    result = result + value[i];
                } else {
                    break
                }
            }
            props.addTag(result);
            props.ChangeText(value, props.id, result);
        }
    }

    let onDoubleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        setEdit(true);
        let MarkedText = props.tag;
        let editValue = value.replace(MarkedText, `<span className={s.MarkedWord}>${MarkedText}</span>`);
        setValue(editValue)
    }

    let onBlurHandler = () => {
        setEdit(false);
        getNewTag();
    }
    
    if (edit) {
        return (
            <div>
                {/* <div>
                    <textarea name="text" className={s.Textarea} cols={30} rows={10} value={value} onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
                </div> */}
                <div contentEditable onInput={onChangeHandler} onBlur={onBlurHandler}>{props.text}</div>
                {/* <HighlightWithinTextarea
                value={props.text}
                highlight={props.id}
            onChange={onChangeHandler}/>*/}
                </div>  
        )
    } else {
        return (
            <div onDoubleClick={onDoubleClickHandler}>
                <p>
                    {props.text}
                </p>
            </div>
        )
    }
}

export default EditableTextField;