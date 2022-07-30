import React from 'react'
import Header from './Header'
import RoutesForProject from './Routes'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.applicationWrapper}>
            <HashRouter>
                <Header/>
                {/*<RoutesForProject/>*/}
            </HashRouter>
        </div>
    )
}

export default HW5
