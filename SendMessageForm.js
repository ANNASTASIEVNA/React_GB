import React from 'react';

export const SendMessageForm = (props) => {

    return ( 
        <>
        <input className='inputText' type='text' onChange={props.changeAuthor} value={props.authorValue} placeholder="author name" minLength={1} required/>
        <input className='inputText' type='text' onChange={props.changeMessage} value={props.messageValue} placeholder="message" required/>
        <button onClick={props.addMessage}>send</button>
        </>
    );
};