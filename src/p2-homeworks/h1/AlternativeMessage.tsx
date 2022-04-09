import React from 'react'
import s from "./AlternativeMessage.module.css";

type AlternativeMessagePropsType = {
    text: TextType
}
type TextType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={s.outWrapper}>
            <div className={s.triangleWrapper}>
                <div className={s.messageWrapper}>
                    <div className={s.messageContain}>
                        <h3 className={s.messageName}>{props.text.name}</h3>
                        <p className={s.messageText}>{props.text.message}</p>
                    </div>
                    <div className={s.messageTimeWrapper}>
                        <p className={s.messageTime}>{props.text.time}</p>
                    </div>
                    <div className={s.triangle}></div>
                    <div className={s.triangleArc}></div>
                </div>
            </div>
            <div className={s.imgWrapper}>
                <img className={s.avatarImg} src={props.text.avatar} alt="avatar"/>
            </div>
        </div>
    )
}
