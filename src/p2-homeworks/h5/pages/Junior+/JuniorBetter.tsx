import React from 'react'
import s from './JuniorBetter.module.css'
import HW12 from "../../../h12/HW12";
import {Provider} from "react-redux";
import {store} from "../../../h12/bll/store";

const JuniorBetter = () => {
    return (
        <div className={s.juniorBetterWrapper}>
            <Provider store={store}>
                <HW12/>
            </Provider>
        </div>
    )
}
export default JuniorBetter;