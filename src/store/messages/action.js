export const MESSAGES_NEW_MESSAGE = 'MESSAGES_NEW_MESSAGE';
export const MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT = 'MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT';

export const newMessageActionUser = (text, autor, messageId, chatId) => ({
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
export const newMessageAction = (text, autor, messageId, chatId) => (dispatch) => {

  dispatch(newMessageActionUser(text, autor, messageId, chatId));

  const messageBot = 'Автоматическое сообщение';
  const autorBot = 'Bot';
  const messageBotId = chatId + 'mes' + Date.now()

  if (autor !== autorBot) {

    setTimeout(() => dispatch(newMessageActionUser(messageBot, autorBot, messageBotId, chatId)), 1000);
  }
}
export const removeMessagesTogetherChatAction = (chatId) => ({
  type: MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT,
  payload: chatId

})