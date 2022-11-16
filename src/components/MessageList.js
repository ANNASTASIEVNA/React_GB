import React from 'react';
import styles from '../styles/message.css';
import {Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getChatsFromReduser} from '../../src/store/chats/selector';
import { getChatMessages } from '../../src/store/messages/selector';


export const MessageList = (props) => {
    const { chatId } = useParams();

    const messagesState = useSelector(getChatMessages(chatId));
    const chatListState = useSelector(getChatsFromReduser);

    if (!chatListState.find(({ id }) => id === chatId)) {
        return <Redirect to='/chats' />
    }

    if (messagesState) {
        return (
            <div className={styles.Messages_container}>
                {messagesState.map((message, index) =>
                    <div key={'id' + index} className={styles.container}>
                        <p className={styles.autor}>
                            {message.autor}:
                        </p>

                        <p>
                            {message.text}
                        </p>
                    </div>
                )
                }
            </div >
        );
    } else {
        return (
            <div className={styles.Messages_container}>
            </div >)


    }


}

export default MessageList;
 
