import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = date?.toLocaleTimeString();
    const stringDate = date?.toLocaleDateString();

    return (
        <div>
            <div className={s.dateWrapper}>
                <div
                    className={s.clockWrapper}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.dayWrapper}>
                        {stringDate}
                    </div>
                )}
            </div>

            <div className={s.buttonWrapper}>
                <SuperButton className={s.button} onClick={start}>start</SuperButton>
                <SuperButton className={s.button} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
