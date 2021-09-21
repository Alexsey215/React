import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";

const rootReducer = combineReducers({
    profileStore: profileReducer,
    chatsStore: chatsReducer,
    messagesStore: messagesReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
