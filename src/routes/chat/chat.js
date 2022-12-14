import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';
import ChatsList from '../../components/ChatsList';
import {Route, Routes} from 'react-router-dom';
import styles from '../chat/chat.css';

export const Chats = () => {
    return (
    <>
        <div className={styles.container}>
          <ChatsList />
          <Routes>
            <Route path='/chats/:chatId' element={styles.container_Message} />
            <MessageList />
            <MessageForm />
        <Route>
          <h1>Выберите чат</h1>
        </Route>
              
          </Routes>
        </div >
        </>

 
  )
}