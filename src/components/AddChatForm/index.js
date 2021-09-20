import { useState } from "react"
import {Form, Button} from "react-bootstrap";

export const AddChatForm = ({onAddChat}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddChat(value);
        setValue('');
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                placeholder="Add new Chat"
                value={value}
                type="text"
                onChange={handleChange}
                className="text-primary mb-2 w-50"
            />
            <Button type="submit" disabled={!value}>
                Add chat
            </Button>
        </Form>
    )
}
