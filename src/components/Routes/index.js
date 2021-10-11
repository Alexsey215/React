import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Home"
import Chats from "../Chats"
import { Profile } from "../Profile";
import { News } from "../News";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/profile" exact>
                    <Profile/>
                </Route>
                <Route path="/chats/:chatId?">
                    <Chats/>
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
                <Route>
                    <h4>404</h4>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
