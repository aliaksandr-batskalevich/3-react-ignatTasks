import React from 'react'
import {Message} from "./Message";
import s from './Hw1.module.css'

export type MessageData = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
}
type MessageDataArr = Array<MessageData>

const messageData: MessageDataArr = [
    {
        id: 'gcs;',
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Marry',
        message: 'Hello, I am Marry!',
        time: '22:00'
    },
    {
        id: 'gc;',
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Alex',
        message: 'Hi, I am Alex!',
        time: '22:05'
    },
    {
        id: 'gs;',
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Alex',
        message: 'Where are you?',
        time: '22:06'
    },
]

function HW1() {

    let messages = messageData.map(el => <div className={s.messageWrapper}><Message data={el}/></div>)


    return (
        <div className={s.hw1Wrapper}>
            <h2>Dialogues</h2>
            <div className={s.phoneOutWrapper}>
                <div className={s.speaker}/>
                <div className={s.displayWrapper}>
                    {messages}
                    <div className={s.textareaWrapper}>
                        <textarea className={s.textarea}/>
                        <button className={s.buttonSend}>SEND</button>
                    </div>
                </div>
                <div className={s.button}/>
            </div>
        </div>
    )
}

export default HW1
