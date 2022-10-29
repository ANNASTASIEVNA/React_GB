import styles from './App.css';
import ButtonHead from './components/HeadButton';
import {useEffect,useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './routes/profile/profile';
import { Home } from './routes/home/home';
import { Chats } from './routes/chat/chat';

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
          <Route exact path='/' component ={Home}/>
          
          <Route path='/chats'>
          <Chats chatsList={chatsList} messageList={messageList} setMessageList={setMessageList} />
          </Route>
                <Route path='/profile' component={Profile} />
     
        </Routes>
     
        </main>
    
   </>

  );

};

export default App;