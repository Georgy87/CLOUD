import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";
import {createDir} from "../../actions/file";
import Popup from './Popup';
import {uploadFile} from '../../actions/file';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);

    const onCreateDir = () => {
        dispatch(createDir(currentDir, 'мои фото'))
    }

    const fileUploadHandler = (event) => {
        const files = [...event.target.files];
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
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
                <div>
                    <label htmlFor="disk__upload-input">Загрузить файл</label>
                    <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input"/>
                </div>
            </div>
        </div>
    )

}

export default Disk;
