import React from "react";
import "../file/File.css";
import { useDispatch } from 'react-redux';
import { pushToStack, setCurrent} from '../../../../reducers/fileReducer';
import { deleteFiles } from '../../../../actions/file';
import { downloadFile } from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";
import { useSelector } from 'react-redux';

function File({ file }) {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.current);
    const fileView = useSelector((state) => state.files.view);

    const onDirNext = () => {
        if (file.type === 'dir') {
            dispatch(setCurrent(file._id));
        }
        dispatch(pushToStack(currentDir));
    }

    const onClickHandler = (e) => {
        e.stopPropagation();
        downloadFile(file);
    }

    const onDeleteFile = (e) => {
        e.stopPropagation();
        dispatch(deleteFiles(file));
    }
    if (fileView === 'list') {
        return (
            <div className="file" onClick={onDirNext}>
                {file.type === 'dir' ? <img src="https://img2.freepng.ru/20180320/pwq/kisspng-rectangle-folders-black-folder-5ab0a7f1a4d657.1103883715215267696752.jpg" alt="" className="file__img"/> :
                <img src="https://img2.freepng.ru/20180515/ehw/kisspng-computer-icons-computer-software-5afa942f4bd3a5.4550626015263713753106.jpg" alt="" className="file__img"/>}
                <div className="file__name">{file.name}</div>
                <div className="file__date">{file.date.slice(0, 10)}</div>
                <div className="file__size">{sizeFormat(file.size)}</div>
                {file.type !== 'dir' && <button onClick={(e) => onClickHandler(e)}>download</button>}
                <button onClick={(e) => onDeleteFile(e)}>delete</button>
                <img src="" alt=""/>
            </div>
        );
    }

    if (fileView === 'plate') {
        console.log(file.type)
        return (
            <div className="file-plate" onClick={onDirNext}>
                {file.type === 'dir' ? <img src="https://img2.freepng.ru/20180320/pwq/kisspng-rectangle-folders-black-folder-5ab0a7f1a4d657.1103883715215267696752.jpg" alt="" className="file-plate__img"/> :
                <img src="https://img2.freepng.ru/20180515/ehw/kisspng-computer-icons-computer-software-5afa942f4bd3a5.4550626015263713753106.jpg" alt="" className="file-plate__img"/>}
                <div className="file-plate__name">{file.name}</div>
                <div className="file-plate__btns">
                    {file.type !== 'dir' && <button onClick={(e) => onClickHandler(e)}>download</button>}
                    <button onClick={(e) => onDeleteFile(e)}>delete</button>
                </div>
            </div>
        );
    }

}

export default File;
