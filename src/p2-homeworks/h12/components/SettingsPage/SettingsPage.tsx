import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './SettingsPage.module.css'
import {CustomThemeType, FontWeightType, ModeType, setMode, setSettings} from "../../bll/themeReducer";
import {useDispatch} from "react-redux";

type SettingsPagePropsType = {
    mode: ModeType
    customTheme: CustomThemeType
}

export const SettingsPage: React.FC<SettingsPagePropsType> = ({mode, customTheme}) => {

    const {backgroundColor, textColor, fontSize, fontWeight} = customTheme.settings;

    const [backgroundColorState, setBackgroundColorState] = useState<string >(backgroundColor);
    const [textColorState, setTextColorState] = useState<string>(textColor);
    const [fontSizeState, setFontSizeState] = useState<string>(fontSize);
    const [fontWeightState, setFontWeightState] = useState<FontWeightType>(fontWeight);
    const [changedSettings, setChangedSettings] = useState<boolean>(false);

    const dispatch = useDispatch();
    const setModeHandler = () => {
        mode === "settings"
        && dispatch(setMode('mainPage'))
    };

    const backgroundColorHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBackgroundColorState(event.currentTarget.value);
        setChangedSettings(true);
    };
    const textColorHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTextColorState(event.currentTarget.value);
        setChangedSettings(true);
    };
    const fontSizeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.currentTarget.value >= 0) {
            setFontSizeState(event.currentTarget.value);
            setChangedSettings(true);
        }

    };
    const fontWeightHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFontWeightState(event.currentTarget.value as FontWeightType);
        setChangedSettings(true);
    };

    const setSettingsHandler = () => {
        dispatch(setSettings(backgroundColorState, textColorState, fontSizeState, fontWeightState));
        dispatch(setMode('mainPage'));
    };

    return (
        <div className={s.settingsPageWrapper}>
            <span>SettingsPage</span>
            <label>Set color of background: <input type="color" value={backgroundColorState} onChange={backgroundColorHandler}/></label>
            <label>Set color of text: <input type="color" value={textColorState} onChange={textColorHandler}/></label>
            <label>Set size of font: <input type="number" value={fontSizeState} onChange={fontSizeHandler}/>px</label>
            <label>Set weight of font: <select defaultValue={fontWeightState} onChange={fontWeightHandler}>
                <option value="lighter" selected={fontWeightState === 'lighter'}>lighter</option>
                <option value="normal" selected={fontWeightState === 'normal'}>normal</option>
                <option value="bold" selected={fontWeightState === 'bold'}>bold</option>
            </select></label>
            <div className={s.buttonWrapper}>
                <button onClick={setModeHandler}>Cancel</button>
                <button disabled={!(fontSizeState !== '0' && changedSettings)} onClick={setSettingsHandler}>Apply</button>
            </div>

        </div>
    );
};