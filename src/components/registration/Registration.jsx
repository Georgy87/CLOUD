import React, { useState } from "react";
import "./registration.less";
import Inputs from "../inputs/Inputs";
import {registration} from '../../actions/user';


function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div>Регистрация</div>
            <Inputs value={email} setValue={setEmail} text="text" placeholder="Введите email" />
            <Inputs value={password} setValue={setPassword} text="text" placeholder="Введите пароль" />
            <button onClick={() => registration(email, password)} >Войти</button>
        </div>
    );
}

export default Registration;
