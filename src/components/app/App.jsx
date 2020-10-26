import React from "react";
import Navbar from "../navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./app.less";
import Registration from '../registration/Registration';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
            <Navbar/>
            <Switch>
                <Route path="/registration" component={Registration} />
            </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;


