import React from 'react'
import s from './Message.module.css'
import {MessageData} from "./HW1";

type MessagePropsType = {
    data: MessageData
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={props.data.name === 'Alex' ? `${s.messageWrapperMe} ${s.messageWrapper}` : s.messageWrapper}>
            <div className={props.data.name === 'Alex' ? `${s.avatarWrapper} ${s.avatarWrapperMe}` : s.avatarWrapper}>
                <img className={s.img} src={props.data.avatar} alt="avatar"/>
            </div>
            <div className={s.cornerWrapper}>
                <div className={props.data.name === 'Alex' ? `${s.corner} ${s.cornerMe}` : s.corner}/>
                <div className={props.data.name === 'Alex' ? `${s.arc} ${s.arcMe}` : s.arc}/>
            </div>
            <div className={s.textOutsideWrapper}>
                <div className={props.data.name === 'Alex' ? `${s.texInsideWrapper} ${s.texInsideWrapperMe}` : s.texInsideWrapper}>
                    <div className={s.textMainWrapper}>
                       <h4 className={props.data.name === 'Alex' ? `${s.nickNameMe} ${s.nickName}` : s.nickName}>{props.data.name}</h4>
                        <p className={s.textOfMessage}>{props.data.message}</p>
                    </div>
                    <div className={s.timeWrapper}>
                        <p className={s.time}>{props.data.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
