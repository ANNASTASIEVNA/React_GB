import styles from './App.css';
import ButtonHead from './components/HeadButton';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './routes/profile/profile';
import { Home } from './routes/home/home';
import { Chats } from './routes/chat/chat';


function App() {

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
          <Route exact path='/' element ={Home}/>
          
          <Route path='/chats/*' element={ <Chats chatsList={chatsList} messageList={messageList} setMessageList={setMessageList} /> } />
                <Route path='/profile' element={Profile} />
     
        </Routes>
     
        </main>
    
   </>

  );

};

export default App;