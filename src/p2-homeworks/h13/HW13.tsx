import React, {useState} from 'react';
import s from './HW13.module.css';
import {Request} from "./Request/Request";
import {Preloader} from "./assets/Preloader/Preloader";

export const HW13 = () => {
    const [isPreloader, setIsPreloader] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const setPreloaderHandler = setIsPreloader;
    const setMessageHandler = setMessage;

    return (
        <div className={s.HW13Wrapper}>
            <h2>Send a wish to the space server</h2>
            <div className={s.actionWrapper}>
                {isPreloader && !message
                ? <Preloader/>
                : message
                    ? <div className={s.messageWrapper}>
                        <span>RESPONSE from server:</span><br/>
                        {message}
                    </div>
                    : <Request
                        setPreloader={setPreloaderHandler}
                        setMessage={setMessageHandler}
                    />}
            </div>
        </div>
    );
};