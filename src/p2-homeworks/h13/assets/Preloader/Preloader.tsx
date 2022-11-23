import React from 'react';
import s from './Preloader.module.css';
import image from './spinnerPreloader.gif'

export const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={image} alt="Preloader"/>
        </div>
    );
};