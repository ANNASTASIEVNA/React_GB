
    import React from 'react';
    import styles from '../styles/message.css';
    import { useState } from "react";
    import Button from '@mui/material/Button';
    import TrapFocus from 'focus-trap-react';
    import styled from 'styled-components';
    import { useSelector } from 'react-redux';
    import { useDispatch } from 'react-redux';
    import { newMessageAction } from '../store/messages/action';
    import { useParams } from 'react-router-dom';
    import { getUserFromProfile } from '../store/profile/selector';

        const CustomButton = styled(Button)((props) => {
        console.log(props);
         return `
        border-radius: 10px;
        `
        })



export const MessageForm = (props) => {


    const dispatch = useDispatch();
    const user = useSelector(getUserFromProfile);;
    const [message, setMessage] = useState('');
    const { chatId } = useParams();

    function sendMessage(message, autor, chatId) {
        if (message !== '') {
            const messageId = chatId + 'mess' + Date.now();
            dispatch(newMessageAction(message, autor, messageId, chatId))
            setMessage('');
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        sendMessage(message, user, chatId);
    }

    function onChange(event) {
        setMessage(event.target.value);
    }

    return (
        <div className={styles.container}>
            <form className={styles.containerForm} onSubmit={onSubmit}>
                <TrapFocus open>
                    <input tabIndex={-1} value={message} onChange={onChange} placeholder="Введите сообщение" type='text' className={styles.input}></input>
                </TrapFocus>
                <CustomButton type="submit" variant="contained" size="large" endIcon={<SendIcon />}>Отправить</CustomButton>
            </form>
        </div >
    )
}
export default MessageForm;