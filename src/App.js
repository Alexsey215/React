import './App.scss';
import {Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Message } from './components/Message/Message'
import { useState, useEffect, useRef } from "react";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const [chats, setChats] = useState([
        {
            name: 'Alex',
            id: Date.now()
        },
        {
            name: 'John',
            id: Date.now()
        },
        {
            name: 'Bob',
            id: Date.now()
        },
        {
            name: 'Julia',
            id: Date.now()
        }
    ]);

    const inputRef = useRef(null);


    useEffect(() => {
        if (messageList[messageList.length - 1]?.author ==='Me') {
            const timeout = setTimeout(() => {
                const today = new Date();
                const curTime = `${today.getHours()}:${today.getMinutes()}`;
                setMessageList((prevMessageList) => [
                    ...prevMessageList,
                    {
                        author: 'Bot',
                        text: 'I am bot',
                        date: curTime,
                    }
                ], [messageList])
            }, 1500)
            return () => {
                clearTimeout(timeout);
            };
        }
        inputRef.current.focus();

    }, [messageList])
    const handleAddMessage = (e) => {
        e.preventDefault();
        const today = new Date();
        const curTime = `${today.getHours()}:${today.getMinutes()}`;
        setMessageList((prevMessageList) => [...prevMessageList, {
            author: 'Me',
            text: value,
            date: curTime,
        }])
        setValue("");
        inputRef.current.focus();
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <Container className="App mt-2" fluid="md">
            <Row>
                <Col xs={4}>
                    <ListGroup>
                        <ListGroup.Item action  className="text-primary">
                            {chats[0].name}
                        </ListGroup.Item>

                        <ListGroup.Item action  className="text-primary">
                            {chats[1].name}
                        </ListGroup.Item>

                        <ListGroup.Item action  className="text-primary">
                            {chats[2].name}
                        </ListGroup.Item>

                        <ListGroup.Item action  className="text-primary">
                            {chats[3].name}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col  xs={8}>
                    <Form>
                        <Form.Control
                            as="textarea"
                            placeholder="Message"
                            value={value}
                            onChange={handleChange}
                            ref={inputRef}
                            className="text-primary"
                        />
                        <Button onClick={handleAddMessage} variant="outline-primary" className="mt-2">Send message</Button>
                    </Form>

                {messageList.map((messageData, i) =>
                    <Message
                        key={i}
                        messageAuthor={messageData.author}
                        messageText={messageData.text}
                        renderCurDate={messageData.date}
                    />)}
                </Col>
            </Row>

        </Container>
    );
}

export default App;
