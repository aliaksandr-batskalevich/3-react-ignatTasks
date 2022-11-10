import React, {ChangeEvent, useState} from 'react';
import s from './SettingsPage.module.css'
import {CustomThemeType, FontWeightType, ModeType, setMode, setSettings} from "../../bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";

type SettingsPagePropsType = {
    mode: ModeType
}

export const SettingsPage: React.FC<SettingsPagePropsType> = ({mode}) => {

    const customTheme = useSelector<RootStateType, CustomThemeType>(state => state.changeThemePage.customTheme);
    const {backgroundColor, color, fontSize, fontWeight} = customTheme.settings;

    const [backgroundColorState, setBackgroundColorState] = useState<string>(backgroundColor);
    const [textColorState, setTextColorState] = useState<string>(color);
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
        if (+event.currentTarget.value >= 0 && +event.currentTarget.value <= 20) {
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
            <h3>SettingsPage</h3>
            <div>
                <label>
                    Set color of background:
                    <input
                        type="color"
                        value={backgroundColorState}
                        onChange={backgroundColorHandler}/>
                </label>
            </div>
            <div>
                <label>
                    Set color of text:
                    <input
                        type="color"
                        value={textColorState}
                        onChange={textColorHandler}/>
                </label>
            </div>
            <div>
                <label>
                    Set size of font:
                    <input
                        type="number"
                        value={fontSizeState}
                        onChange={fontSizeHandler}/>
                    px
                </label>
            </div>
            <div>
                <label>
                    Set weight of font:
                    <select
                        defaultValue={fontWeightState}
                        onChange={fontWeightHandler}>
                        <option
                            value="lighter"
                            selected={fontWeightState === 'lighter'}
                        >lighter
                        </option>
                        <option
                            value="normal"
                            selected={fontWeightState === 'normal'}
                        >normal
                        </option>
                        <option
                            value="bold"
                            selected={fontWeightState === 'bold'}
                        >bold
                        </option>
                    </select>
                </label>
            </div>
            <div className={s.buttonWrapper}>
                <button onClick={setModeHandler}>Cancel</button>
                <button disabled={!(fontSizeState !== '0' && changedSettings)} onClick={setSettingsHandler}>Apply
                </button>
            </div>

        </div>
    );
};