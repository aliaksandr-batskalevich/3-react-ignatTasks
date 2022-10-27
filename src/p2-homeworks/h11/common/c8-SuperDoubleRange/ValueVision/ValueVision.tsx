import React from 'react';
import s from './ValueVision.module.css'
import SuperButton from "../../../../h4/common/c2-SuperButton/SuperButton";

type ValueVisionPropsType = {
    value: number
    inc: () => void
    dec: () => void
}

export const ValueVision: React.FC<ValueVisionPropsType> = ({value, inc, dec}) => {

    const incButtonHandler = () => {
        inc();
    };
    const decButtonHandler = () => {
        dec();
    };

    return (
        <div className={s.valueVisionWrapper}>
            <SuperButton className={s.button} onClick={decButtonHandler}>-</SuperButton>
            <div className={s.value}>{value}</div>
            <SuperButton className={s.button} onClick={incButtonHandler}>+</SuperButton>
        </div>
    );
};