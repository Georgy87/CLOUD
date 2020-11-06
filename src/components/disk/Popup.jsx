import React from 'react';
import Input from "../inputs/Inputs";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";
import {createDir} from "../../actions/file";

const Popup = (props) => {
    const [dirName, setDirName ] = useState('');
    const dispatch = useDispatch();

    const currentDir = useSelector((state) => state.files.current);

    const onCreateDir = () => {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close">X</button>
                    <Input type="text" placeholder="Введите название папки" value={dirName} setValue={setDirName} />
                    <button onClick={onCreateDir}>Создать папку</button>
                </div>
            </div>
        </div>
    )
}

export default Popup

