import React, {MouseEvent} from 'react'
import {AffairType} from "./HW2";
import {Button} from "./Button";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
            <tr className={s.affairRow}>
                <th className={s.th}>{props.affair.name}</th>
                <td>{props.affair.priority}</td>
                <td><Button callBackButton={deleteCallback} title={'X'}/></td>
            </tr>
    )
}

export default Affair
