import React from 'react'
import {Message} from "./Message";
import {AlternativeMessage} from "./AlternativeMessage";
import s from './Hw1.module.css'

const messageData = [{
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Marry',
    message: 'Hi! What is your name?',
    time: '22:00'
}, {
    avatar: 'https://w7.pngwing.com/pngs/959/410/png-transparent-mickey-mouse-encapsulated-postscript-cdr-mickey-mouse-cdr-heroes-hand.png',
    name: 'Mickey',
    message: 'Hi, my name is Mickey!!!!!',
    time: '22:05'
}]

function HW1() {
    return (
        <div className={s.hw1Wrapper}>
            <h2>1st homework</h2>
            <hr/>
            <Message text={messageData[0]}/>
            <AlternativeMessage text={messageData[1]}/>
        </div>
    )
}

export default HW1
