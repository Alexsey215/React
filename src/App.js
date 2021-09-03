import './App.scss';
import { Message } from './components/Message/Message'
import {useEffect, useState} from "react";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const today = new Date();
    const curTime = `${today.getHours()}:${today.getMinutes()}`;

    useEffect(() => {
        if (messageList[messageList.length - 1]?.author ==='Me') {
            setTimeout(() => {
                setMessageList((prevMessageList) => [...prevMessageList,
                    {
                        text: 'I am bot',
                        author: 'Bot',
                        date: curTime,
                    }
                ], [messageList])
            }, 1500)
        }
    }, [messageList])
    const handleAddMessage = () => {
        setMessageList((prevMessageList) => [...prevMessageList, {
            author: 'Me',
            text: value,
            date: curTime,
        }])
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div className="App chat-container">
            <input className="App-input" value={value} onChange={handleChange} />
            <button className="App-btn" onClick={handleAddMessage}>Send message</button>
            {messageList.map((messageData, i) =>
                <Message
                    key={i}
                    messageAuthor={messageData.author}
                    messageText={messageData.text}
                    renderCurDate={messageData.date}
                />)}
        </div>
    );
}

export default App;
