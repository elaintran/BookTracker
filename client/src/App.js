import React from "react";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
