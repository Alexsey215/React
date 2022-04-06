import { useState } from "react"
import {Form, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addChatFb} from "../../store/chats/actions";

export const AddChatForm = ({onAddChat}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChatFb(value))
        setValue('');
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                placeholder="Add new Chat"
                value={value}
                type="text"
                onChange={handleChange}
                className="text-primary my-1 w-50"
            />
            <Button type="submit" disabled={!value}>
                Add chat
            </Button>
        </Form>
    )
}
