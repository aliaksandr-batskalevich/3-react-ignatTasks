import React from 'react'
import {Message} from "./Message";
import './Hw1.css'

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
    return (
        <div className='hw1Wrapper'>
            <hr/>
            <hr/>
            homeworks 1
            {messageData.map(el => {
                return (
                    <div className='messageWrapper'>
                        <hr/>
                        <Message data={el}/>
                    </div>
                )
            })}
        </div>
    )
}

export default HW1
