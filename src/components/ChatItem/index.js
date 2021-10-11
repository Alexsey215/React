import {Link} from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap"
import {deleteChatFb} from "../../store/chats/actions";
import {useDispatch} from "react-redux";
import {deleteMessagesFb} from "../../store/messages/actions";

export const ChatItem = ({chat, id, onDelete}) => {
    const dispatch = useDispatch();
    const handleDeleteChat = () => {
        dispatch(deleteChatFb(id));
        dispatch(deleteMessagesFb(id))
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
