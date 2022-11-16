export const MESSAGES_NEW_MESSAGE = 'MESSAGES_NEW_MESSAGE';
export const MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT = 'MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT';

export const newMessageAction = (text, autor, messageId, chatId) => ({
  type: MESSAGES_NEW_MESSAGE,
  payload: {
    message: {
      text: text,
      autor: autor,
      messageId: messageId
    },
    chatId: chatId
  }
})

export const removeMessagesTogetherChatAction = (chatId) => ({
  type: MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT,
  payload: chatId

})