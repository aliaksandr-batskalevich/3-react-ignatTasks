import React, {ChangeEvent, FC} from 'react';
import s from './Switch.module.css';
import {changeTheme, CustomThemeType, ModeType, setMode, ThemesType} from "../../bll/themeReducer";
import {useDispatch} from "react-redux";


type SwitchPropsType = {
    mode: ModeType
    currentTheme: ThemesType
    customTheme: CustomThemeType
}

export const Switch: FC<SwitchPropsType> = ({currentTheme, mode, customTheme}) => {

    const dispatch = useDispatch();

    const changeThemeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTheme(event.currentTarget.value as ThemesType))
    }
    const setCustomSettingsHandler = () => {
        if (mode === "mainPage") {
            dispatch(setMode('settings'));
        }
    };

    return (
        <div className={s.switchWrapper}>
            <span>SET STYLE OF PAGE</span>
            <label><input type="radio" name={'style'} value={'white'} checked={currentTheme === "white"} onChange={changeThemeHandler}/>white</label>
            <label><input type="radio" name={'style'} value={'dark'} checked={currentTheme === "dark"} onChange={changeThemeHandler}/>dark</label>
            <label><input type="radio" name={'style'} value={'custom'} checked={currentTheme === "custom"} onChange={changeThemeHandler} disabled={!customTheme.isFilled}/>custom</label>
            <button onClick={setCustomSettingsHandler}>set custom settings</button>
        </div>
    );
};