import React from 'react';
import s from './DigitalClock.module.css';

const toDoubleNum = (num: number): string => {
    let numInString = String(num);
    let result: string = numInString.length === 1 ? '0' + numInString : numInString;
    return result;
};


type DigitalClockPropsType = {
    hours: number
    minutes: number
    seconds: number

};
export const DigitalClock: React.FC<DigitalClockPropsType> = ({hours, minutes, seconds}) => {

    return (
        <div className={s.clockWrapper}>
            <HoursWithMemo data={hours}/>:<MinutesWithMemo data={minutes}/>:<SecondsWithMemo data={seconds}/>
        </div>
    )
};

type HoursPropsType = {
    data: number
};
const Hours = (props: HoursPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
};

type MinutesPropsType = {
    data: number
};
const Minutes = (props: MinutesPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
};

type SecondsPropsType = {
    data: number
};
const Seconds = (props: SecondsPropsType) => {
    return (
        <span>{toDoubleNum(props.data)}</span>
    )
};

const HoursWithMemo = React.memo(Hours);
const MinutesWithMemo = React.memo(Minutes);
const SecondsWithMemo = React.memo(Seconds);