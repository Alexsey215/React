import { Provider } from "react-redux";
import './App.scss';
import { Routes } from "./components/Routes";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
