import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import { createDir } from "../../actions/file";
import Popup from "./Popup";
import { uploadFile } from "../../actions/file";
import "./Disk.css";
import Uploader from "./uploader/Uploader";
import { setCurrent, setFileView } from '../../reducers/fileReducer';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);
    const [drag, setDrag] = useState(false);
    const [sort, setSort] = useState("type");
    const loader = useSelector((state) => state.loader.loader);
    const dirStack = useSelector(state => state.files.dirStack);

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
    };

    const backClickHandler = () => {
        const backDirId = dirStack.pop();
        dispatch(setCurrent(backDirId));
    }

    useEffect(() => {
        dispatch(getFiles(currentDir, sort));
    }, [currentDir, sort]);

    if (loader) {
        return (
            <div className="loader">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
    return (
        <div>
            {!drag ? (
                <div
                    className="disk"
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragOver={dragEnter}
                >
                    <button onClick={() => backClickHandler()}>Назад</button>
                    <button onClick={onCreateDir}>Создать папку</button>
                    <select
                        className="disc__select"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                    </select>
                    <button className="disk__plate" onClick={() => dispatch(setFileView('plate'))}>Плитка</button>
                    <button className="disk__list" onClick={() => dispatch(setFileView('list'))}>Список</button>
                    <FileList />
                    <Popup />
                    <Uploader />
                    <div>
                        <img src="" alt="" />
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
