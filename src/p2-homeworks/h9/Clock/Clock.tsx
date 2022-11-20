import {useEffect, useState} from "react";
import s from './Clock.module.css'
import {Switch} from "./Switch/Switch";
import {DigitalClock} from "./DigitalClock/DigitalClock";
import {AnalogClock} from "./AnalogClock/AnalogClock";

export type ClockStyleType = 'digital' | 'analog';

export const Clock = () => {

    let [seconds, setSeconds] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [hours, setHours] = useState<number>(0);
    let [intervalId, setIntervalId] = useState(0);
    let [clockStyle, setClockStyle] = useState<ClockStyleType>('digital');

    const startTiming = () => {
        let trueId = setInterval(() => {
            setSeconds(state => state + 1);
        }, 1000);
        setIntervalId(+trueId);
    };
    const stopTiming = () => {
        clearInterval(intervalId);
    };

    useEffect(() => {
        startTiming();
    }, []);
    useEffect(() => {
        if (seconds === 60) {
            setMinutes(state => state + 1);
            setSeconds(0);
        }
    }, [seconds]);
    useEffect(() => {
        if (minutes === 60) {
            setHours(state => state + 1);
            setMinutes(0);
        }
    }, [minutes]);

    const resetButtonHandler = () => {
        stopTiming();
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        startTiming();
    };
    const trueTimeButtonHandler = () => {
        stopTiming();

        let trueTime = new Date();
        let trueHours = trueTime.getHours();
        let trueMinutes = trueTime.getMinutes();
        let trueSeconds = trueTime.getSeconds();

        setHours(trueHours);
        setMinutes(trueMinutes);
        setSeconds(trueSeconds);
        startTiming();
    };
    const stopButtonHandler = () => {
        stopTiming();
    };
    const setClockStyleCallback = (newStyle: ClockStyleType) => {
        setClockStyle(newStyle);
    };

    return (
        <div className={s.mainWrapper}>
            <Switch clockStyle={clockStyle} setClockStyleCallback={setClockStyleCallback}/>
            {clockStyle === 'digital'
                ? <DigitalClock hours={hours} minutes={minutes} seconds={seconds}/>
                : <AnalogClock
                    seconds={seconds}
                    minutes={minutes}
                    hours={hours}
                />}
            <div className={s.buttonWrapper}>
                <button className={s.button} onClick={resetButtonHandler}>reset</button>
                <button className={s.button} onClick={trueTimeButtonHandler}>true time</button>
                <button className={s.button} onClick={stopButtonHandler}>stop</button>
            </div>
        </div>
    )
};