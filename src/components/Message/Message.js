import './Message.scss';

export function Message({messageAuthor, messageText, renderCurDate}) {
    return (
        <div className='message container'>
            <span className='message-author'>{ messageAuthor}</span>
            <span className='message-text'>{messageText}</span>
            <span className='message-date'>{renderCurDate}</span>
        </div>
    );
}
