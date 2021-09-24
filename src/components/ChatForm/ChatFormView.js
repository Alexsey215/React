import { Button, Form } from "react-bootstrap";

export const ChatFormView = ({ handleSubmit, handleChange, inputRef, value }) => (
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
    );
