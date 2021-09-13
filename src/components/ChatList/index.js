import {ListGroup} from "react-bootstrap";
import { Link } from "react-router-dom"
export function ChatList({chats}) {
    return (
        <ListGroup>
            {chats.map((chat, i) =>
                <ListGroup.Item action className="text-primary p-0" key={i}>
                    <Link className="d-block p-2 w-100 text-decoration-none" to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}
