import React from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./app.less";
import Registration from "../registration/Registration";
import Login from "../registration/Login";
import { auth } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Disk from '../disk/Disk';

function App() {
    const isAuth = useSelector((state) => state.user.isAuth);

    // const login = () => {
    //     axios.post(
    //         "http://localhost:5000/api/files", { name:  'видио', type: 'g'},
    //         { headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}}
    //     );

    //     return;
    // };
    // if (isAuth) {

    //     login()
    // }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth());
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                {!isAuth ? (
                    <Switch>
                        <Route path="/registration" component={Registration} />
                        <Route path="/login" component={Login} />
                        <Redirect to="/login"/>
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/" component={Disk} />
                        <Redirect to="/"/>
                    </Switch>
                )}
            </div>
        </BrowserRouter>
    );
}
export default App;
