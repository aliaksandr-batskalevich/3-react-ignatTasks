import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {Preloader} from "./components/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingStateType} from "./bll/loadingReducer";

function HW10() {
    let state = useSelector<AppStoreType, LoadingStateType>(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        state.isLoading && setTimeout(() => {
            dispatch(loadingAC(false));
        }, 5000)
    }, [state])

    const setLoading = () => {
        dispatch(loadingAC(true));
    };

    return (
        <div className={s.mainWrapper}>
            <h2>Fake loading</h2>
            <div className={s.loadingWrapper}>
                {state.isLoading
                    ? (
                        <Preloader/>
                    ) : (
                        <div>
                            <SuperButton
                                className={s.superButton}
                                onClick={setLoading}
                            >
                                set loading...
                            </SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HW10
