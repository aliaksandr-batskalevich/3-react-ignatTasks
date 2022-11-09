import {combineReducers, legacy_createStore} from "redux";
import {themeReducer} from "./themeReducer";

const rootReducer = combineReducers({changeThemePage: themeReducer});

export const store = legacy_createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;