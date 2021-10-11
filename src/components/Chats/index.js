import { Container, Row, Col  } from 'react-bootstrap';
import {useCallback, useEffect, useMemo} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams,useHistory } from "react-router-dom"

import {addMessageFb, initMessages} from "../../store/messages/actions";
import { Message } from '../Message'
import { ChatForm } from '../ChatForm/ChatFormContainer'
import { ChatList } from '../ChatList'
import { AUTHORS } from "../../utils/constants";

import {addChat, deleteChat, initChats} from "../../store/chats/actions";
import { selectChats, selectIfChatExists } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";



function Chats() {
    const { chatId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const messages = useSelector(selectMessages);
    const chats = useSelector(selectChats);

    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExists = useSelector(selectChatExists);

    useEffect(() => {
        dispatch(initChats());
        dispatch(initMessages());
    }, []);

    let timeout;
    const sendMessage = useCallback(
        (text, author) => {
                dispatch(addMessageFb(text, author, chatId))
                if (author === AUTHORS.HUMAN) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    dispatch(addMessageFb("I am bot",  AUTHORS.BOT, chatId));
                }, 1500);
            }
        },
        [dispatch, chatId]
    );


    const handleAddMessage = useCallback(
        (text) => {
            sendMessage(text, AUTHORS.HUMAN);
        },
        [sendMessage]
    );

    const handleAddChat = useCallback(
        (name) => {
            dispatch(addChat(name));
        },
        [dispatch]
    );

    const handleDeleteChat = useCallback(
        (id) => {
            dispatch(deleteChat(id));
            if (chatId !== id) {
                return;
            }

            if (chats.length === 1) {
                history.push(`/chats`);

            } else {
                history.push(`/chats/${chats[0].id}`);
            }
        },
        [chatId, dispatch, chats, history]
    );

    return (
        <Container className="App mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2} >
                    <Link to="/profile">
                        <h4>Profile page</h4>
                    </Link>
                </Col>
                <Col>
                    <Link to="/news">
                        <h4>News</h4>
                    </Link>
                </Col>

            </Row>
            <Row>
                <Col xs={4}>
                    <ChatList
                        chats={chats}
                        onAddChat={handleAddChat}
                        onDeleteChat={handleDeleteChat}
                    />
                </Col>
                <Col xs={8}>
                    {!!chatId && chatExists  && (
                    <>
                        <ChatForm onSubmit={handleAddMessage} />
                        {(Object.values(messages[chatId] || {} || []).map((message) =>
                            <Message
                                key={message.id}
                                author={message.author}
                                text={message.text}
                                id={message.id}

                            />
                        ))}
                    </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Chats;
