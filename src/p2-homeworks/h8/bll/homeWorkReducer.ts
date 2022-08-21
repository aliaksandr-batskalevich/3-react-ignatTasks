import {UserType} from "../HW8";

const SORT = 'SORT';
const CHECK = 'CHECK';

type ActionsType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case SORT: {
            return [...state].sort((a, b) => action.payload === 'up' ? a.age - b.age : b.age - a.age);
        }
        case CHECK: {
            return [...state].filter(el => el.age >= action.payload);
        }
        default:
            return state
    }
}

export const sortAC = (value: string) => {
    return {
        type: SORT,
        payload: value
    } as const
};
export const checkAC = (value: number) => {
    return {
        type: CHECK,
        payload: value
    } as const
}