import React, {ChangeEvent, useState} from 'react';
import s from './Request.module.css';
import {RequestsAPI} from "./api";

type RequestPropsType = {
    setPreloader: (value: boolean) => void
    setMessage: (message: string) => void
}

export const Request = (props: RequestPropsType) => {
    const [value, setValue] = useState<boolean>(false);
    const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.checked);
    };
    const onClickButtonHandler = () => {
        props.setPreloader(true);
        RequestsAPI.post(true)
            .then(response => {
                props.setMessage(response.info);
                props.setPreloader(false);
                setTimeout(() => {
                    props.setMessage('');
                }, 5000);
            });
    };
    
    return (
        <div className={s.requestWrapper}>
            <label><input
                type="checkbox"
                onChange={onChangeCheckboxHandler}
                checked={value}
            /> I want to find an interesting job</label>
            <div className={s.buttonWrapper}>
                <button
                    disabled={!value}
                    onClick={onClickButtonHandler}
                >SEND</button>
            </div>
        </div>
    );
};