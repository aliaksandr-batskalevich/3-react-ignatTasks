import React from "react";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {MainPage} from "./components/MainPage/MainPage";
import {SettingsPage} from "./components/SettingsPage/SettingsPage";
import {RootStateType} from "./bll/store";
import {PageStateType} from "./bll/themeReducer";

function HW12() {

    const state = useSelector<RootStateType, PageStateType>(state => state.changeThemePage);

    const {customTheme, mode} = state

    return (
        <div className={s.HW12Wrapper}>
            {mode === "mainPage"
                ? <MainPage state={state}/>
                : <SettingsPage mode={mode} customTheme={customTheme}/>}
        </div>
    );
}

export default HW12;
