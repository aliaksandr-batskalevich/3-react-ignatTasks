import React from 'react'
import s from "../h8/HW8.module.css";
import {Clock} from "./Clock/Clock";

function HW9() {
    return (
        <div className={s.mainWrapper}>
            <h2>Click to clock (9)</h2>
            <Clock/>
        </div>
    )
}

export default HW9
