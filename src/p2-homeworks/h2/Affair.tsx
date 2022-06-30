import React, {MouseEvent} from 'react'
import {AffairType} from "./HW2";
import {Button} from "./Button";

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
            <span>{props.affair.name}</span>
            <Button callBackButton={deleteCallback} title={'X'}/>
        </div>
    )
}

export default Affair
