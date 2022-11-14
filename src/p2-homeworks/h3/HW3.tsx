import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './HW3.module.css'

export type UserType = {
    _id: string
    name: string
}

function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name.trim()}, ...users]);
    }

    return (
        <div className={s.hw3Wrapper}>
            <h2>Enter text and call alert +counter</h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
