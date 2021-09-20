import {TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkboxState: false,
}

export const  profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                checkboxState: !state.checkboxState
            }
        }
        default:
            return state;
    }
}
