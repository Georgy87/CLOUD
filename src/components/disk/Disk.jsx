import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import { createDir } from "../../actions/file";
import Popup from "./Popup";
import { uploadFile } from "../../actions/file";
import "./Disk.css";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);
    const [drag, setDrag] = useState(false);

    const onCreateDir = () => {
        dispatch(createDir(currentDir, "мои фото"));
    };

    const fileUploadHandler = (event) => {
        const files = [...event.target.files];
        files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    };

    const dragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(true);
    };

    const dragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.dataTransfer.files];
        setDrag(false);
        files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    }

    useEffect(() => {
        dispatch(getFiles(currentDir));

    }, [currentDir]);
    console.log(currentDir)
    return (
        <div>
            {!drag ? (
                <div
                    className="disk"
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={dragEnter}
                >
                    <button>Назад</button>
                    <button onClick={onCreateDir}>Создать папку</button>
                    <FileList />
                    <Popup />
                    <div>
                        <img src="" alt=""/>
                        <label htmlFor="disk__upload-input">
                            Загрузить файл
                        </label>
                        <input
                            multiple={true}
                            onChange={(event) => fileUploadHandler(event)}
                            type="file"
                            id="disk__upload-input"
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="drop"
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={dragEnter}
                    onDrop={onDrop}
                >
                    Перетащите файлы
                </div>
            )}
        </div>
    );
};

export default Disk;
