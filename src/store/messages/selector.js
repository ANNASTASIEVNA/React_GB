export const getMessagesFromReducer = (state) => state.messages.messagesList;

export const getChatMessages = (chatId) => (state) => getMessagesFromReducer(state)[chatId];