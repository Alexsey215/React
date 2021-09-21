import { TOGGLE_CHECKBOX, CHANGE_NAME } from "./actions";

const initialState = {
    checkboxState: false,
    name: "default",
}

export const  profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,
                checkboxState: !state.checkboxState
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        default:
            return state;
    }
}
