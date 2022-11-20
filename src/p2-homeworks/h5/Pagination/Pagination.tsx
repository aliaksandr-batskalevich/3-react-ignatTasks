import React from 'react';
import s from './Pagination.module.css'
import {NavLink, useLocation} from "react-router-dom";

export const Pagination = () => {
    const {pathname} = useLocation();
    const textForJuniorButton = `${pathname === '/junior-plus' ? '<< ' : ''}to JuniorPage${pathname === '/' ? ' >>' : ''}`;

    return (
        <div className={s.paginationWrapper}>
            <div className={s.buttonWrapper}>
                { pathname === '/junior'
                && <NavLink to={'/'}>{'<< to PreJuniorPage'}</NavLink>}

                { (pathname === '/' || pathname === '/junior-plus')
                && < NavLink to={'/junior'}>{textForJuniorButton}</NavLink>}

                { pathname === '/junior'
                && <NavLink to={'/junior-plus'}>{'to JuniorPlusPage >>'}</NavLink>}
            </div>
        </div>
    );
};