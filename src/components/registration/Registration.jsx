import React, { useState } from "react";
import "./registration.less";
import Inputs from "../inputs/Inputs";

function Registration() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <div>Регистрация</div>
            <Inputs text="text" placeholder="Введите email" />
            <Inputs text="text" placeholder="Введите пароль" />
            <button>Войти</button>
        </div>
    );
}

export default Registration;
