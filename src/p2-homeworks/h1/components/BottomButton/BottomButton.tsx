import React from "react";
import s from './BottomButton.module.css'

type BottomButtonPropsType = {
    onClickCallback: () => void
    onDoubleClickCallback?: () => void
}

export const BottomButton: React.FC<BottomButtonPropsType> = ({onClickCallback, onDoubleClickCallback}) => {

    const onClickButtonHandler = () => {
        onClickCallback();
    };
    const onDoubleClickButtonHandler = () => {
        onDoubleClickCallback && onDoubleClickCallback();
    };

    return (
        <div className={s.buttonWrapper} onClick={onClickButtonHandler} onDoubleClick={onDoubleClickButtonHandler}/>
    )
}