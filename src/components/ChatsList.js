import styles from '../styles/chat.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


export function ChatsList(props) {


    return (<div className={styles.container_Chats} >
        <List >
            {props.chatsList.map((chat, index) =>
                <>
                    <Link to={`/chats/${chat.id}`}>
                        <ListItem key={'idChat' + index} disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary={chat.name} key={'idChatName' + index} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </>
            )
            }
        </List>

    </div >)

}
export default ChatsList;