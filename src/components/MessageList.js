import React from 'react';
import styles from '../styles/message.css';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const MessageList = (props) => {
    const { chatId } = useParams();

    if (!props.chatsList.find(({ id }) => id === chatId)) {
        return <Navigate to='/chats' />
    }



    return (
        <div className={styles.Messages_contaner}>
            {props.text.map((message, index) =>
                <div key={'id' + index} className={styles.container}>
                    <p className={styles.autor}>
                        {message.autor}:
                    </p>

                    <p>
                        {message.message}
                    </p>
                </div>
            )
            }
        </div >
    );
};

export default MessageList;
 
