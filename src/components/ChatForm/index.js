import { Button, Form } from "react-bootstrap";
import {useCallback, useRef, useState} from "react";

export function ChatForm({ onSubmit }) {
    const inputRef = useRef(null);

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");

        inputRef.current.focus();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                as="textarea"
                placeholder="Message"
                value={value}
                onChange={handleChange}
                ref={inputRef}
                className="text-primary"
            />
            <Button variant="outline-primary" className="mt-2" type="submit">Send message</Button>
        </Form>
    )
}
