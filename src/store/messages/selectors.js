export const selectMessages = (state) => state.messagesStore.messages;
export const selectMessagesByChatId = (chatId) => (state) =>
    state.messagesStore.messages[chatId];
