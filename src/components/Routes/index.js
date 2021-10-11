import {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Home} from "../Home"
import Chats from "../Chats"
import {Profile} from "../Profile";
import {News} from "../News";
import {PublicRoute} from "../PublicRoute";
import {PrivateRoute} from "../PrivateRoute"
import {auth, login, signOut, signUp} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";

export const Routes = () => {
    const [authed, setAuthed] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []);

    const handleLogin = async (email, pass) => {
        try {
            await login(email, pass)
            setAuthed(true);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    };

    const handleSignUp = async (email, pass) => {
        try {
            await signUp(email, pass)
            setAuthed(true);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
            setError(e);
        }
    }
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact authed={authed}>
                    <Home onLogin={handleSignUp}/>
                </PublicRoute>
                <PublicRoute path="/login" exact authed={authed}>
                    <Home onLogin={handleLogin}/>
                </PublicRoute>
                <PublicRoute path="/signup" exact authed={authed}>
                    <Home onSignUp={handleSignUp}/>
                </PublicRoute>
                <PrivateRoute path="/profile" exact authed={authed}>
                    <Profile onLogout={handleLogout}/>
                </PrivateRoute>
                <PrivateRoute
                    path="/chats/:chatId?"
                    component={Chats}
                    authed={authed}
                />
                <Route path="/news">
                    <News/>
                </Route>
                <Route>
                    <h4>{!!error ? error :'404'}</h4>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
