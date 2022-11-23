import React from "react";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {MainPage} from "./components/MainPage/MainPage";
import {SettingsPage} from "./components/SettingsPage/SettingsPage";
import {RootStateType} from "./bll/store";
import {CustomThemeSettingsType, ModeType, PageStateType, ThemesType} from "./bll/themeReducer";

function HW12() {
    const mode = useSelector<RootStateType, ModeType>(state => state.changeThemePage.mode);
    const currentTheme = useSelector<RootStateType, ThemesType>(state => state.changeThemePage.currentTheme);
    const customThemeSettings = useSelector<RootStateType, CustomThemeSettingsType>(state => state.changeThemePage.customTheme.settings);
    const {fontSize, fontWeight, ...styleForWrapper} = customThemeSettings
    const styleForText = {fontSize: `${fontSize}px`, fontWeight: fontWeight}

    return (
        <div>
            <h2>Set style and write!</h2>
            <div
                className={`${s.HW12Wrapper} ${currentTheme === "dark" ? s.HW12WrapperDark : currentTheme === "white" ? s.HW12WrapperWhite : ''}`}
                style={currentTheme === 'custom' ? styleForWrapper : undefined}>
                {mode === "mainPage"
                    ? <MainPage styleForText={styleForText}/>
                    : <SettingsPage mode={mode}/>}
            </div>
        </div>
    );
}

export default HW12;
