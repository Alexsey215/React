import './App.scss';
import Message from './components/Message'

const text = 'Hello world !!!';

function App() {
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;
