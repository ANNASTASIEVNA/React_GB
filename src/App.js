import styles from './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import ButtonHead from './components/HeadButton';
import ChatsList from './components/ChatsList'
import {useEffect,useState} from 'react';
import {Route, Routes} from 'react-router-dom';

const messageBot = { autor: 'Бот', message: 'Автоматическое сообщение' }


function App() {

  const chatsListinitialState = [
    {
      name: 'Чат 1',
      id: 'idChat1'
    },
    {
      name: 'Чат 2',
      id: 'idChat2'
    },
    {
      name: 'Чат 3',
      id: 'idChat4'
    }
  ]

  const [chatsList] = useState(chatsListinitialState);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].autor !== messageBot.autor) {
      const clearId = setTimeout(() => setMessageList([...messageList, messageBot]), 1000);
      return () => {
        clearTimeout(clearId);
      }
    }
  }, [messageList]);

  return (
    <>
   <header className={styles.head}>
        <div className={styles.headButtons}>
          <ButtonHead Link='/'>Домашняя страница</ButtonHead>
          <ButtonHead Link='/chats'>Чаты</ButtonHead>
          <ButtonHead Link='/profile'>Профиль</ButtonHead>
        </div>
      </header>

    <main>
        <Routes>
          <Route exact path='/'>
            <p>Домашняя страница</p>
          </Route>

          <Route path='/chats'>

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

          </Route>

        </Routes>
     
        </main>
    
   </>

  );

};

export default App;