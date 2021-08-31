import '../App.scss';
const Message = ({text}) => {
    return (
        <div className='App-message'>
            <span>{ text }</span>
        </div>
    );
}
export default Message;
