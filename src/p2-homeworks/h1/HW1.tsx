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
export type ModeType = 'on' | 'off'
export type MessagingType = 'messaging' | 'stop'

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

const randomTextForMessages: textForMessageType = ['Hey!', 'Yo', 'I like it.', 'What are you doing now?', 'Tell me about anything...', 'I am missing you:)', 'Ok)'];

function HW1() {

    let [messages, setMessages] = useState<MessageDataArr>(startMessages);
    let [displayMode, setDisplayMode] = useState<ModeType>('on')
    let [messagingMode, setMessagingMode] = useState<MessagingType>('messaging');

    const getTimeNow = (): string => {
        let time = new Date().toLocaleTimeString().split(':');
        time.length = 2;
        return (
            time.join(':')
        )
    };

    const sendRandomMessage = (content?: string) => {
        let newMessage = {
            id: v1(),
            avatar: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
            name: 'Marry',
            message: '',
            time: getTimeNow()
        };

        if (content === 'goodbye') {
            newMessage.message = 'Ok, goodbye:)';
        } else if (content === 'hi') {
            newMessage.message = 'Hi!';
        } else {
            newMessage.message = randomTextForMessages[Math.trunc(Math.random() * randomTextForMessages.length)];
        }
        setMessages([...messages, newMessage]);
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
    };

    const blockDisplay = () => {
        setDisplayMode(displayMode === 'on' ? 'off' : 'on');
    };


    useEffect(() => {
        if (messagingMode === 'messaging') {
            const intervalId = setInterval(sendRandomMessage, 10000);
            return () => {
                clearInterval(intervalId)
            };
        }
    }, [messagingMode, messages]);

    useEffect(() => {
        if (messages[messages.length - 1].name === 'Alex') {
            let message = messages[messages.length - 1].message.toLowerCase().replace(' ', '');
            if (message.split('goodbye').length > 1 && messagingMode === 'messaging') {
                setMessagingMode("stop");
                setTimeout(() => {
                    sendRandomMessage('goodbye');
                }, 2000)
            }
            if (message.split('hi').length > 1 && messagingMode === 'stop') {
                setTimeout(() => {
                    sendRandomMessage('hi');
                    setMessagingMode("messaging");
                }, 4000)
            }
        }
    }, [messages])

    return (
        <div className={s.hw1Wrapper}>
            <h2>Dialogues</h2>
            <div className={s.phoneOutWrapper}>
                <div className={s.speaker}/>
                <Display
                    mode={displayMode}
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
