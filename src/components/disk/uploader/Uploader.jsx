import React from "react";
import UploadFile from "./UploadFile";
import "./Uploader.css";
import { useSelector, useDispatch } from 'react-redux';
import { hideUploader } from '../../../reducers/uploadReducer';

const Uploader = () => {
    const isVisible = useSelector(state => state.upload.isVisible);
    const dispatch = useDispatch();
    const files = useSelector(state => state.upload.files);
    // console.log(files)

    return ( isVisible &&
        <div className="uploader">
            <div className="uploader__header">
                <div className="uploader__title">Загрузки</div>
                <button className="uploader__close" onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {files.map((file) => (
                <UploadFile key={file.id} file={file} />
            ))}
        </div>
    );
};

export default Uploader;
