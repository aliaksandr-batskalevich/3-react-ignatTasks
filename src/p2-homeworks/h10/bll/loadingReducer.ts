export type LoadingStateType = {
    isLoading: boolean
}
type LoadingActionType = ReturnType<typeof loadingAC>

const initState: LoadingStateType = {
    isLoading: false,
}
const LOADING = 'LOADING';

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case LOADING: {
            return {...state, ...action.payload}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return (
        {
            type: LOADING,
            payload: {isLoading}
        }
    ) as const;
}