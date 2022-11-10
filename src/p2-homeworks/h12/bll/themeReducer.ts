export type PageStateType = typeof initState
export type ModeType = 'mainPage' | 'settings';
export type ThemesType = 'dark' | 'white' | 'custom';
export type ContentType = {
    title: string
    text: string
    date: string
};
export type FontWeightType = 'lighter' | 'normal' | 'bold';
export type CustomThemeSettingsType = {
    backgroundColor: string
    color: string
    fontSize: string
    fontWeight: FontWeightType
};
export type CustomThemeType = {
    isFilled: boolean
    settings: CustomThemeSettingsType
};

type ActionsType = ReturnType<typeof changeTheme> | ReturnType<typeof setMode> | ReturnType<typeof setSettings> | ReturnType<typeof changeText>;

const CHANGE_THEME = 'CHANGE_THEME';
const SET_MODE = 'SET_MODE';
const SET_SETTINGS = 'SET_SETTINGS';
const CHANGE_TEXT = 'CHANGE_TEXT';

const getDate = (): string => {
    let time = new Date().toLocaleTimeString().split(':', 2).join(':');
    let date = new Date().toLocaleDateString();
    return `${date} ${time}`;
};

const initState = {
    mode: 'mainPage' as ModeType,
    currentTheme: 'white' as ThemesType,
    customTheme: {
        isFilled: false,
        settings: {
            backgroundColor: '#bd45e8',
            color: '#2fdf0c',
            fontSize: '0',
            fontWeight: 'normal',
        }
    } as CustomThemeType,

    content: {
        title: 'Leave your post below :)',
        text: 'Nice day today))))',
        date: getDate(),
    } as ContentType
};

export const themeReducer = (state = initState, action: ActionsType): PageStateType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, ...action.payload};
        }
        case "SET_MODE":
            return {...state, ...action.payload};
        case "SET_SETTINGS":
            return {...state, customTheme: {isFilled: true, settings: {...action.payload}}};
        case "CHANGE_TEXT":
            return {...state, content: {...state.content, ...action.payload}};
        default: return state;
    }
};

export const changeTheme = (currentTheme: ThemesType) => {
    return {
        type: CHANGE_THEME,
        payload: {currentTheme}
    } as const;
};
export const setMode = (mode: ModeType) => {
    return {
        type: SET_MODE,
        payload: {mode}
    } as const;
};
export const setSettings = (backgroundColor: string, color: string, fontSize: string, fontWeight: FontWeightType) => {
    return {
        type: SET_SETTINGS,
        payload: {backgroundColor, color: color, fontSize, fontWeight}
    } as const;
};
export const changeText = (text: string) => {
    const date = getDate();
    return {
        type: CHANGE_TEXT,
        payload: {text, date}
    } as const;
};