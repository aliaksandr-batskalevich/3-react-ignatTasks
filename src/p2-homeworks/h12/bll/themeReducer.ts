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
    textColor: string
    fontSize: string
    fontWeight: FontWeightType
};
export type CustomThemeType = {
    isFilled: boolean
    settings: CustomThemeSettingsType
};

type ActionsType = ReturnType<typeof changeTheme> | ReturnType<typeof setMode> | ReturnType<typeof setSettings>;

const CHANGE_THEME = 'CHANGE_THEME';
const SET_MODE = 'SET_MODE';
const SET_SETTINGS = 'SET_SETTINGS';

const initState = {
    mode: 'mainPage' as ModeType,
    currentTheme: 'white' as ThemesType,
    customTheme: {
        isFilled: false,
        settings: {
            backgroundColor: '#bd45e8',
            textColor: '#2fdf0c',
            fontSize: '0',
            fontWeight: 'normal',
        }
    } as CustomThemeType,

    content: {
        title: 'Test theme in APP with redux :)',
        text: 'Some text. You can change the text by double click!',
        date: 'Date when you testing...'
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
export const setSettings = (backgroundColor: string, textColor: string, fontSize: string, fontWeight: FontWeightType) => {
    return {
        type: SET_SETTINGS,
        payload: {backgroundColor, textColor, fontSize, fontWeight}
    } as const;
};