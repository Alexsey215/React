import { Container, Row, Col  } from 'react-bootstrap';
import {useCallback, useEffect, useState} from "react";
import {Link, useParams } from "react-router-dom"
import { Message } from '../Message'
import { ChatForm } from '../ChatForm'
import { ChatList } from '../ChatList'
import { AUTHORS } from "../../utils/constants";

const initialMessages = {
    "chat-1": [
        {
            author: AUTHORS.ME,
            text: "hello",
            id: "mess-1"
        },
        {
            text: "hello",
            author: AUTHORS.ME,
            id: "mess-2"
        }
    ],
    "chat-2": [],
    "chat-3": [],
    "chat-4": [],
};
const initialChats = [
    {
        name: 'Alex',
        id: "chat-1"
    },
    {
        name: 'John',
        id: "chat-2"
    },
    {
        name: 'Bob',
        id: "chat-3"
    },
    {
        name: 'Julia',
        id: "chat-4"
    }
];

function Chats() {
    const { chatId } = useParams();

    const [messageList, setMessageList] = useState(initialMessages);
    const [chats, setChats] = useState(initialChats);

    const sendMessage = useCallback((message) => {
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], message],
    }));
}, [chatId])

    useEffect(() => {
    const curMess = messageList[chatId];
        if (chatId && curMess !== undefined && curMess[curMess.length - 1]?.author === AUTHORS.ME) {
            const timeout = setTimeout(() => {
                const today = new Date();
                const curTime = `${today.getHours()}:${today.getMinutes()}`;
                sendMessage({
                    author: AUTHORS.BOT,
                    text: 'I am bot',
                    date: curTime,
                    id: `mess-${Date.now()}`
                })
            }, 1500)
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [messageList])

    const handleAddMessage = useCallback((value) => {
        const today = new Date();
        const curTime = `${today.getHours()}:${today.getMinutes()}`;
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [
            ...prevMessageList[chatId],
                {
                    author: AUTHORS.ME,
                    text: value,
                    date: curTime,
                },
        ]}));
    },[chatId])
    return (
        <Container className="App mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2}>
                    <Link to="/profile">
                        <h4>Profile page</h4>
                    </Link>
                </Col>
                <Col>
                    <Link to="/">
                        <h4>Home page</h4>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <ChatList chats={chats}/>
                </Col>
                <Col xs={8}>
                    {!!chatId && !!messageList[chatId] &&
                    <>
                        <ChatForm onSubmit={handleAddMessage}/>
                        {messageList[chatId].map((messageData, i) =>
                            <Message
                                key={i}
                                messageAuthor={messageData.author}
                                messageText={messageData.text}
                                renderCurDate={messageData.date}
                            />)}
                    </>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Chats;
