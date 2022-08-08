import React, {useEffect, useState} from 'react'
import s from './Hw1.module.css'
import {BottomButton} from "./components/BottomButton/BottomButton";
import {Display} from "./components/Display/Display";
import {v1} from "uuid";

export type MessageData = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
}
export type MessageDataArr = Array<MessageData>
type textForMessageType = Array<string>
export type modeType = 'messaging' | 'stop' | 'off'

const startMessages: MessageDataArr = [
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Marry',
        message: 'Hello, I am Marry!',
        time: '22:00'
    },
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Alex',
        message: 'Hi, I am Alex!',
        time: '22:05'
    },
    {
        id: v1(),
        avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        name: 'Alex',
        message: 'Where are you?',
        time: '22:06'
    }
];

const randomTextForMessages: textForMessageType = ['Hey!', 'Yo', 'I like it.', 'What are you doing now?']

function HW1() {

    let [messages, setMessages] = useState<MessageDataArr>(startMessages);
    let [mode, setMode] = useState<modeType>('messaging')

    const getTimeNow = () => {
        let time = new Date().toLocaleTimeString().split(':');
        time.length = 2;
        return (
            time.join(':')
        )
    };

    console.log(getTimeNow());

    const addRandomMessage = () => {
        let newRandomMessage = {
            id: v1(),
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Marry',
            message: randomTextForMessages[Math.trunc(Math.random() * randomTextForMessages.length)],
            time: getTimeNow()
        };
        setMessages([...messages, newRandomMessage]);
    };
    const sendMessage = (text: string) => {
        let newMessage = {
            id: v1(),
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Alex',
            message: text,
            time: getTimeNow()
        };
        setMessages([...messages, newMessage]);
        setMode('messaging');
    };

    //  const stopRandomMessage = () => {               //notWork
    //     setMode("stop");
    //     let lastMessage = {
    //         id: 'gs;',
    //         avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
    //         name: 'Marry',
    //         message: 'Ok, good bye!!!',
    //         time: '22:06'
    //     };
    //     setMessages([...messages, lastMessage]);
    // };

    const blockDisplay = () => {
        setMode(mode !== 'off' ? 'off' : 'stop');
    };

    // if (mode === "messaging") {                  // notWork!!!
    //     setTimeout(addRandomMessage, 5000);
    // }

    useEffect(() => {
        if (mode === 'messaging') {
            setTimeout(addRandomMessage, 5000);
        }
    }, [mode]);

    return (
        <div className={s.hw1Wrapper}>
            <h2>Dialogues</h2>
            <div className={s.phoneOutWrapper}>
                <div className={s.speaker}/>
                <Display
                    mode={mode}
                    messages={messages}
                    sendMessageCallback={sendMessage}
                />
                <BottomButton
                    onClickCallback={blockDisplay}
                />
            </div>
        </div>
    )
}

export default HW1
