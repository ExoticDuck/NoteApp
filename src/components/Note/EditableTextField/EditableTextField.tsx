import React, { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import s from "./EditableTextField.module.scss"

type EditableTextFieldPropsType = {
    text: string
    id: string
    tag: string
    ChangeText: (newValue: string, id: string, newTag: string) => void
    addTag: (tagName: string) => void
}


const EditableTextField = (props: EditableTextFieldPropsType) => {
    let { text, id, tag, ChangeText, addTag } = props

    let [value, setValue] = useState<string>(text);
    let [edit, setEdit] = useState<boolean>(false);
    let [markedupText, setMarkedUpText] = useState<string>("")



    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(markedupText) {
            setTimeout(() => setMarkedUpText(""), 1000) 
        }
        if(e.target.value.length <= 740) {
            setValue(e.target.value)
        }
        
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
                    break;
                }
            }
            addTag(result);
            ChangeText(value, id, result);
        }
    }, [ChangeText, addTag, id, value])

    let onDoubleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        setEdit(true);
        let MarkedText = tag;
        let editValue = value.replaceAll(MarkedText, '<mark>' + MarkedText + '</mark>');
        let tagWord = tag.slice(1);
        editValue = value.replaceAll(tagWord, '<mark>' + tagWord + '</mark>');
        setMarkedUpText('<p>' + editValue + '</p>')
    }

    let onBlurHandler = () => {
        setEdit(false);
        getNewTag();
        if(value.trim() === "") {
            setValue("Enter some text")
        }
    }

    
  

    if (edit) {
        return (
            <div>
                <div>
                    <textarea name="text" className={s.Textarea} cols={35} rows={10} value={value} onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
                </div>
                <div dangerouslySetInnerHTML={{__html: markedupText}} className={s.HiglightedBlock}></div>
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