import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";

export const ChatItem = ({chat, id, onDelete}) => {
    const handleDeleteChat = () => {
        onDelete(id);
    }
    return (
        <div className="d-flex mt-1">
            <ListGroup.Item action className="d-flex text-primary p-0 w-50" key={id}>
                <Link className="d-block p-2 w-100 text-decoration-none" to={`/chats/${id}`}>{chat.name}</Link>
            </ListGroup.Item>
            <Button onClick={handleDeleteChat}>Delete</Button>
        </div>
    )
}
