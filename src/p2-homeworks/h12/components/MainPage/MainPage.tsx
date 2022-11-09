import React, {FC} from 'react';
import s from './MainPage.module.css'
import {PageStateType} from "../../bll/themeReducer";
import {Switch} from "../Switch/Switch";

type MainPagePropsType = {
    state: PageStateType
}

export const MainPage: FC<MainPagePropsType> = ({state}) => {
    const {content, mode, customTheme, currentTheme} = state;

    return (
        <div className={s.mainPageWrapper}>
            <Switch mode={mode} currentTheme={currentTheme} customTheme={customTheme}/>
            <h3>{content.title}</h3>
            <p>{content.text}</p>
            <p>{content.date}</p>
        </div>
    );
};

