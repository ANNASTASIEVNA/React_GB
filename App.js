
import './App.css';
import'./styles/messageList.css';
import { MessageList } from './components/messageList';
import { SendMessageForm } from './components/SendMessageForm';
import { useEffect, useState, useCallback } from "react";

export const App = () => {

	const [messageList, setMessageList] = useState([]);
	const [author, setAuthor] = useState('');
	const [message, setMessage] = useState('');
  
	const handleClick = () => {
	  setMessageList([...messageList, {author, message}]);
	  setAuthor('');
	  setMessage('');
	};
	
	useEffect(()=>{
	  if(messageList.length >= 1){
		const lastelem = messageList.slice(-1);
		lastelem.forEach(el=>{
		  if(el.author != 'bot'){
			setTimeout(function(){setMessageList([...messageList, {author: 'bot', message: 'text'}])}, 1500);
		  }
		})
	  }
	},[messageList]);
  
	const handleChangeAuthor = useCallback((ev) => {
	  setAuthor(ev.target.value);
	}, []);
  
	const handleChangeMessage = useCallback((ev) => {
	  setMessage(ev.target.value);
	}, []);
  
	return ( 
	  <>
		  <MessageList messageList={messageList} />
		  <SendMessageForm addMessage={handleClick} messageValue={message} authorValue={author} changeAuthor={handleChangeAuthor} changeMessage={handleChangeMessage} />
	  </>
	);
  };
  export default App;