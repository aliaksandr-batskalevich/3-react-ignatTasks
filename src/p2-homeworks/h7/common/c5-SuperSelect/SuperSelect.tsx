import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import {MappedOptionsType, OptionsArrType, OptionType} from "../../HW7";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: OptionsArrType
    onChangeOption?: (option: OptionType) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: MappedOptionsType = options ? options.map((option, index) => <option key={index} value={option}  className={s.option}>{index + 1}. {option}</option> ) : [];

    const onChangeCallbackHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <select onChange={onChangeCallbackHandler} {...restProps}>
            <option className={s.option}>select city</option>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
