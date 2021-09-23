import {useCallback, useRef, useState} from "react";
import { ChatFormView } from "./ChatFormView";
export function ChatForm({ onSubmit }) {
    const inputRef = useRef(null);

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");

        inputRef.current.focus();
    };
    return <ChatFormView value={value} inputRef={inputRef} handleChange={handleChange} handleSubmit={handleSubmit} />
}
