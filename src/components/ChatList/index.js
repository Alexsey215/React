import { ListGroup } from "react-bootstrap";
import { ChatItem } from "../ChatItem";
import { AddChatForm } from "../AddChatForm";

export function ChatList({ chats, onDeleteChat, onAddChat }) {
    return (
        <ListGroup>
            {chats.map((chat) =>
                <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat}/>
            )}
            <AddChatForm onAddChat={onAddChat}/>
        </ListGroup>
    )
}
