import { Provider } from "react-redux";
import { store } from "./store";
import './App.scss';
import { Routes } from "./components/Routes";

function App() {

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
