import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { useState } from "react";
import { searchFile , getFiles} from "../../actions/file";

function Navbar() {
    const isAuth = useSelector((state) => state.user.isAuth);
    const current = useSelector((state) => state.files.current);
    const dispatch = useDispatch();
    const [searchTimeout, setSearchTimeout] = useState(false);

    const changeSearch = (e) => {
        if (searchTimeout != false) {
            clearTimeout(searchTimeout);
        }

        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                console.log(value);
                dispatch(searchFile(value));
            }, 1000, e.target.value));
        } else {
            dispatch(getFiles(current));
        }
    }
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
            <div>
                {isAuth && (
                    <input
                        placeholder="Название файла"
                        type="text"
                        // value={search}
                        onChange={(e) => changeSearch(e)}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;
