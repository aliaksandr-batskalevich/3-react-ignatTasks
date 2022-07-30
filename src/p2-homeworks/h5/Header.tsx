import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {path} from "./Routes";

function Header() {
    return (
        <div className={s.navWrapper}>
            <nav className={s.nav}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? s.isActive : ''} to={path.preJunior.path}>{path.preJunior.title}</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? s.isActive : ''} to={path.junior.path}>{path.junior.title}</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? s.isActive : ''} to={path.juniorPlus.path}>{path.juniorPlus.title}</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
