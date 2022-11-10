import React, {ChangeEvent, FC} from 'react';
import s from './Switch.module.css';
import {changeTheme, ModeType, setMode, ThemesType} from "../../bll/themeReducer";
import {useDispatch} from "react-redux";


type SwitchPropsType = {
    mode: ModeType
    currentTheme: ThemesType
    customThemeIsFilled: boolean
}

export const Switch: FC<SwitchPropsType> = ({currentTheme, mode, customThemeIsFilled}) => {

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
            <h3>SET STYLE OF PAGE</h3>
            <div className={s.optionsWrapper}>
                <div className={s.labelWrapper}>
                    <label>
                        <input
                            type="radio"
                            name={'style'}
                            value={'white'}
                            checked={currentTheme === "white"}
                            onChange={changeThemeHandler}/>
                        <br/>white
                    </label>
                </div>
                <div className={s.labelWrapper}>
                    <label>
                        <input
                            type="radio"
                            name={'style'}
                            value={'dark'}
                            checked={currentTheme === "dark"}
                            onChange={changeThemeHandler}/>
                        <br/>dark
                    </label>
                </div>
                <div className={`${s.labelWrapper} ${s.labelWrapperCustom}`}>
                    <label>
                        <input
                            type="radio"
                            name={'style'}
                            value={'custom'}
                            checked={currentTheme === "custom"}
                            onChange={changeThemeHandler}
                            disabled={!customThemeIsFilled}/>
                        <br/>custom
                    </label>
                    <button onClick={setCustomSettingsHandler}>define</button>
                </div>

            </div>


        </div>
    );
};