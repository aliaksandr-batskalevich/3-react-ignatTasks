import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    loading: loadingReducer,
})

const store = legacy_createStore(rootReducer);

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
