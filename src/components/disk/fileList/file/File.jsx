import React from "react";
import "../file/File.css";
import { useDispatch } from 'react-redux';
import { setCurrent} from '../../../../reducers/fileReducer';
import { deleteFiles } from '../../../../actions/file';
import { downloadFile } from "../../../../actions/file";


function File({ file }) {
    const dispatch = useDispatch();

    const onDirNext = () => {
        if (file.type === 'dir') {
            dispatch(setCurrent(file._id));
        }
    }

    const onClickHandler = (e) => {
        e.stopPropagation();
        downloadFile(file);
    }

    const onDeleteFile = (e) => {
        e.stopPropagation();
        dispatch(deleteFiles(file));
    }

    return (
        <div className="file" onClick={onDirNext}>
            {file.type === 'dir' ? <div src="" alt="" className="file__img">Direct</div> :
            <div src="" alt="" className="file__img">File</div>}
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
            {file.type !== 'dir' && <button onClick={(e) => onClickHandler(e)}>download</button>}
            <button onClick={(e) => onDeleteFile(e)}>delete</button>
            <img src="" alt=""/>
        </div>
    );
}

export default File;
