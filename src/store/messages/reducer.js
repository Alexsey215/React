import { ADD_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from "./actions";

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: [
                        ...(Object.values(state.messages[payload.chatId]) || {} || []),
                        {
                            id: `message-${Date.now()}`,
                            text: payload.text,
                            author: payload.author,
                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGE: {
            const newChatMessages = state.messages[payload.chatId].filter(
                ({ id }) => id !== payload.id
            );

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: newChatMessages,
                },
            };
        }

        case SET_MESSAGES: {
            return {
                ...state,
                messages: payload,
            }
        }

        default:
            return state;
    }
};
