import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.less";
import Inputs from "../inputs/Inputs";
import {login} from '../../actions/user';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <div>Логин</div>
            <Inputs value={email} setValue={setEmail} text="text" placeholder="Введите email" />
            <Inputs value={password} setValue={setPassword} text="text" placeholder="Введите пароль" />
            <button onClick={() => dispatch(login(email, password))} >Войти</button>
        </div>
    );
}

export default Login;