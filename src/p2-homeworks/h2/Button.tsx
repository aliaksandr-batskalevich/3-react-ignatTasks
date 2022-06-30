import React, {MouseEvent} from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    callBackButton: () => void
    title: string
}

export const Button = (props: ButtonPropsType) => {
    const onclickButtonHandler = (event: MouseEvent<HTMLDivElement>) => {
        props.callBackButton();
    }

    return (
        <div className={s.buttonWrapper} onClick={onclickButtonHandler}>
            <span className={s.span}>{props.title}</span>
        </div>
    )
}