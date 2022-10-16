import React from "react";
export const MessageList = (props) => {

    return ( 
       <>
       <ul className='messageList'>
         {props.messageList.map((message, index) => {
                return  <li key={index}>
                            <div className='authorText'>{message.author}</div>
                            <div className='messageText'>{message.message}</div>
                        </li>})}
        </ul> 
       </>
    );
};
 