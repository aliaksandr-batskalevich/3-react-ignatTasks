import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople);

    const finalPeople = people.map((p: UserType) => (
        <tr key={p._id}>
            <td className={s.td}>{p._id}</td>
            <td className={s.td}>{p.name}</td>
            <td className={s.td}>{p.age}</td>
        </tr>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')));
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)));

    return (
        <div className={s.mainWrapper}>
            <h2>Sort with reducer</h2>
            <table className={s.table}>
                <tr>
                    <th className={s.td}>ID</th>
                    <th className={s.td}>NAME</th>
                    <th className={s.td}>AGE</th>
                </tr>
                {finalPeople}
            </table>

            <div className={s.buttonWrapper}>
                <div><SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton className={`${s.button} ${s.centerButton}`} onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton className={s.button} onClick={check18}>check 18+</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8
