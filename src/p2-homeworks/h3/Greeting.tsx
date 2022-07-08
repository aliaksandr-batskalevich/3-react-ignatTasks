import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: any
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    const inputClass = error.length !== 0 ? s.errorBorder : '';

    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key ===  'Enter' && addUser();
    }
    const onClickButtonHandler = () => {
        addUser();
    }

    return (
        <div>
            <input placeholder={'write name...'} value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInputHandler}/>
            <button disabled={name.length === 0} className={s.button} onClick={onClickButtonHandler}>add</button>
            <div className={s.counter}>{totalUsers}</div>
            <p className={s.errorText}>{error}</p>
        </div>
    )
}

export default Greeting
