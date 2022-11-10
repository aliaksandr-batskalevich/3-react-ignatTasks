import React, {ChangeEvent, useState} from 'react';
import s from './EditableZone.module.css';
import {useDispatch} from "react-redux";
import {changeText, ThemesType} from "../../../bll/themeReducer";

type EditableZonePropsType = {
    text: string
    date: string
    currentTheme: ThemesType
    styleForText: {
        fontSize: string
        fontWeight: string
    }
}

export const EditableZone: React.FC<EditableZonePropsType> = ({text, date, currentTheme, styleForText}) => {

    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [textData, setTextData] = useState<string>(text)

    const setEditHandler = () => {
        setIsEdit(true);
    }
    const onBlurHandler = () => {
        setIsEdit(false);
        textData !== text && dispatch(changeText(textData));
    }

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextData(event.currentTarget.value);
    };

    const styleForTextWithBorder = currentTheme === 'custom' ? {...styleForText, border: 'red solid 1px'} : currentTheme === "white" ? {border: 'darkred solid 1px'} : {border: 'gold solid 1px'};

    return (
        <div className={s.editableZoneWrapper}>
            {isEdit
                ? <textarea
                    className={s.textArea}
                    autoFocus
                    onBlur={onBlurHandler}
                    value={textData}
                    onChange={onChangeTextAreaHandler}
                />
                : <div
                    className={s.mainArea}
                    style={styleForTextWithBorder}
                    onDoubleClick={setEditHandler}>
                    <p className={s.text}>{textData}</p>
                    <p className={s.date}>{date}</p>
                </div>}
        </div>
    );
};