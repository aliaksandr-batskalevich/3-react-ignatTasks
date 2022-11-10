import React, {FC, useState} from 'react';
import s from './MainPage.module.css'
import {PageStateType} from "../../bll/themeReducer";
import {Switch} from "../Switch/Switch";
import {EditableZone} from "./EditableZone/EditableZone";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";

type MainPagePropsType = {
    styleForText: {
        fontSize: string
        fontWeight: string
    }
}

export const MainPage: FC<MainPagePropsType> = ({styleForText}) => {
    const state = useSelector<RootStateType, PageStateType>(state => state.changeThemePage);
    const {content, mode, customTheme, currentTheme} = state;
    const {isFilled} = customTheme;

    return (
        <div className={s.mainPageWrapper}>
            <Switch mode={mode} currentTheme={currentTheme} customThemeIsFilled={isFilled}/>
            <h3 className={s.title}>{content.title}</h3>
            <EditableZone currentTheme={currentTheme} text={content.text} date={content.date} styleForText={styleForText}/>
        </div>
    );
};

