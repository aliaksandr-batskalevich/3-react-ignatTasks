import React, {ReactElement, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

export type OptionType = string
export type OptionsArrType = Array<OptionType>
export type MappedOptionsType = Array<ReactElement> | Array<null>

const arr: OptionsArrType = ['Brest', 'Berlin', 'Gdansk']

function HW7() {
    const [value, onChangeOption] = useState<OptionType | undefined>(undefined);

    return (
        <div className={s.mainWrapper}>
            <h2>select VS radio</h2>
            <p className={s.text}>I am going to...</p>
            <div className={s.inputsWrapper}>
                <div className={s.superSelectWrapper}>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div className={s.superRadioWrapper}>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW7
