import React from "react";
import "../file/File.css";
import { useDispatch } from 'react-redux';
import { setCurrent } from '../../../../reducers/fileReducer';

function File({ file }) {
    const dispatch = useDispatch();
    const onDirNext = () => {
        if (file.type === 'dir') {
            dispatch(setCurrent(file._id));
        }
    }
    return (
        <div className="file" onClick={onDirNext}>
            {file.type === 'dir' ? <div src="" alt="" className="file__img">Direct</div> :
            <div src="" alt="" className="file__img">File</div>}
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
}

export default File;
