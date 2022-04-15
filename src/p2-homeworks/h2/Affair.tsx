import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={s.taskWrapper}>
            <span className={s.taskId}>{props.affair._id}</span>
            <span className={s.taskName}>{props.affair.name}</span>
            <button className={s.delButton} onClick={deleteCallback}>x</button>
        </div>
    );
}

export default Affair;
