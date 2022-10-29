import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';
import ChatsList from '../../components/ChatsList';
import {Route, Routes} from 'react-router-dom';
import styles from '../chat/chat.css';

export const Chats = ({ chatsList, messageList, setMessageList }) => {
    return (
    <div className={styles.container}>
      <ChatsList chatsList={chatsList}></ChatsList>
      <Routes>
        <Route path='/chats/:chatId'>
          <div className={styles.container_Message}>
            <MessageList text={messageList} chatsList={chatsList}></MessageList>
            <MessageForm messageList={messageList} setMessageList={setMessageList}></MessageForm>
          </div>
        </Route>

        <Route>
          <h1>Выберите чат</h1>
        </Route>
      </Routes>
    </div >
  )
}