import React from "react";
import s from './Display.module.css';
import {Message} from "./Message/Message";
import {MessageDataArr, ModeType} from "../../HW1";
import {TextWriter} from "./TextWriter/TextWriter";

type DisplayPropsType = {
    mode: ModeType
    messages: MessageDataArr
    sendMessageCallback: (text: string) => void
}

export const Display: React.FC<DisplayPropsType> = ({mode, messages, sendMessageCallback}) => {

    let messagesRender = messages.map(el => <div className={s.messageWrapper}><Message data={el}/></div>);

    let classNameOfDisplay = mode === 'off' ? `${s.displayWrapper} ${s.displayBlocked}` : s.displayWrapper

    return (
        <div className={classNameOfDisplay}>
            {mode === 'on'
            && <>
                {messagesRender}
                <TextWriter sendMessageCallback={sendMessageCallback} />
            </>}
        </div>
    )
}