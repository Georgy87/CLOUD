import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch} from "react-redux";
import {logout} from "../../reducers/userReducer";

function Navbar() {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <img className="navbar__logo" src="" alt="" />
            <div className="navbar__header">MERN CLOUD</div>
            <div className="navbar__login">
                {!isAuth && <NavLink to="/login">Войти</NavLink>}
            </div>
            <div className="navbar__registration">
                {!isAuth && <NavLink to="/registration">Регистрация</NavLink>}
                {isAuth && <div onClick={() => dispatch(logout())}>Выйти</div>}
            </div>
        </div>
    );
}

export default Navbar;
