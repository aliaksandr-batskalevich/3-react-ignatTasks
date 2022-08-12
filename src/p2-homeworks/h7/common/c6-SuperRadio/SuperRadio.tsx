import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {MappedOptionsType, OptionsArrType, OptionType} from "../../HW7";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: OptionsArrType
    onChangeOption?: (option: OptionType) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
    };

    const mappedOptions: MappedOptionsType = options ? options.map((option, index) => (
        <label key={index} className={s.label}>
            <input
                className={s.input}
                type={'radio'}
                name={name}
                checked={option === value}
                value={option}
                onChange={onChangeCallbackHandler}
                // name, checked, value, onChange
            />
            {`${index + 1}. ${option}`}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
