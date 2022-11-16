import styles from '../styles/chat.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import {styled} from '@mui/system';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { chatsAddItemAction, chatsRemoveItemAction } from '../../store/chats/action'
import { removeMessagesTogetherChatAction } from '../../store/messages/actions'
import { getChatsFromReduser } from '../../store/chats/selectors';

const CustomButton = styled(Button)(() => {
    return `
    border-radius: 10px;
    `
})

export function ChatsList() {

    const dispatch = useDispatch();
    const chatListState = useSelector(getChatsFromReduser);

    const onClick = () => {
        const nameNewChat = prompt('Введите имя чата');
        const idNewChat = 'chat' + Date.now();
        dispatch(chatsAddItemAction(nameNewChat, idNewChat));
    }

    const clickDelete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(chatsRemoveItemAction(event.target.id));
        dispatch(removeMessagesTogetherChatAction(event.target.id))
    }

    return (<div className={styles.container_Chats} >

        <CustomButton onClick={onClick} type="submit" variant="contained" size="large" >Добавить чат</CustomButton>

        <List >
            {chatListState.map((chat, index) =>
               
                    <Link to={`/chats/${chat.id}`} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary={chat.name} key={'idChatName' + index} />
                                <CustomButton onClick={clickDelete} size="large" id={chat.id} >X</CustomButton>
                            </ListItemButton>
                        </ListItem>
                    </Link>

               
            )
            }
        </List>

    </div >)
}