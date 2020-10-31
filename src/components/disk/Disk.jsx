import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";
import {createDir} from "../../actions/file";
import Popup from './Popup';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);
    const onCreateDir = () => {
        dispatch(createDir(currentDir, 'мои фото'))
    }
    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir]);
    return (
        <div>
            <div>
                <button>Назад</button>
                <button onClick={onCreateDir}>Создать папку</button>
                < FileList/>
                <Popup/>
            </div>
        </div>
    )

}

export default Disk;
