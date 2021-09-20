export const selectChats = (state) => state.chatsStore.chats;
export const selectChatsLength = (state) => state.chatsStore.chats.length;
export const selectFirstChatId = (state) => state.chatsStore.chats?.[0].id;
export const selectIfChatExists = (id) => (state) =>
    !!state.chatsStore.chats.find((chat) => id === chat.id);
