import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./TextWriter.module.css";

type TextWriterPropsType = {
    sendMessageCallback: (text: string) => void
}

export const TextWriter: React.FC<TextWriterPropsType> = ({sendMessageCallback}) => {

    let [textAreaData, setTextAreaData] = useState<string>('');
    let [error, setError] = useState<boolean>(false);

    const sendMessage = () => {
        if (textAreaData.trim()) {
            sendMessageCallback(textAreaData.trim());
            setTextAreaData('');
        } else {
            setError(true);
        }

    };

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaData(event.currentTarget.value);
        setError(false);
    };
    const onClickButtonHandler = () => {
        sendMessage();
    };
    const onPressEnterTextAreaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.charCode === 13 && event.ctrlKey) {
            sendMessage();
        }
    };

    let textAreaStyle = error ? `${s.textarea} ${s.textareaError}` : s.textarea

    return (
        <div className={s.textareaWrapper}>
            <div className={s.textAreaWrapper}>
                <textarea
                    placeholder={'write message..'}
                    value={textAreaData}
                    className={textAreaStyle}
                    onChange={onChangeTextAreaHandler}
                    onKeyPress={onPressEnterTextAreaHandler}
                />
            </div>
            <button
                className={s.buttonSend}
                onClick={onClickButtonHandler}
                disabled={!textAreaData.trim()}
            >
                SEND
            </button>
        </div>
    )
}