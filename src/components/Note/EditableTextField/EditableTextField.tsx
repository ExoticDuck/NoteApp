import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, MouseEvent, useCallback, useState } from "react";
import s from "./EditableTextField.module.scss"
// import { HighlightWithinTextarea } from 'react-highlight-within-textarea';

type EditableTextFieldPropsType = {
    text: string
    id: string
    tag: string
    ChangeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string) => void
}


const EditableTextField = (props: EditableTextFieldPropsType) => {
    let {text, id, tag, ChangeText, addTag} = props

    let [value, setValue] = useState<string>(text);
    let [edit, setEdit] = useState<boolean>(false);

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    let getNewTag = useCallback(() => {
        let hashTagIndex = value.indexOf("#");
        if (hashTagIndex === -1) {
            addTag("#all")
            ChangeText(value, id, "#all");
        } else {
            let result = ""
            for (let i = hashTagIndex; i < value.length; i++) {
                if (value[i] !== " ") {
                    result = result + value[i];
                } else {
                    break
                }
            }
            addTag(result);
            ChangeText(value, id, result);
        }
    }, [ChangeText, addTag, id, value])

    let onDoubleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        setEdit(true);
        // let textAreaText = "";
        // textAreaText = value;
        // let match = new RegExp(tag, "ig");
        // let boldText = '<b>'+ tag + '</b>';
        // let replaced = textAreaText.replace(match, boldText);
        // setValue(replaced)
        // let MarkedText = tag;
        // let editValue = value.replace(MarkedText, `<span className={s.MarkedWord}>${MarkedText}</span>`);
        // setValue(editValue)
    }

    let onBlurHandler = () => {
        setEdit(false);
        getNewTag();
    }
    
    if (edit) {
        return (
            <div>
                <div>
                    <textarea name="text" className={s.Textarea} cols={30} rows={10} value={value} onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
                </div>
                {/* <div contentEditable onInput={onChangeHandler} onBlur={onBlurHandler} className={s.EditableDiv}>{text}</div> */}
                {/* <HighlightWithinTextarea
                value={props.text}
                highlight={props.id}
            onChange={onChangeHandler}/>*/}
            
                </div>  
        )
    } else {
        return (
            <div onDoubleClick={onDoubleClickHandler} className={s.textDiv}>
                <p>
                    {value}
                </p>
            </div>
        )

    }
}

export default EditableTextField;