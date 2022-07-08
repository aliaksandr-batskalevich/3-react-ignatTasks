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
        <div>
            <tr>
                <th className={s.th}>{props.affair.name}</th>
                <td><Button callBackButton={deleteCallback} title={'X'}/></td>
            </tr>
        </div>
    )
}

export default Affair
