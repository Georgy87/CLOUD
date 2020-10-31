import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);
    console.log(currentDir)
    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir]);
    return (
        <div>
            <div>
                <button>Назад</button>
                <button>Создать папку</button>
                < FileList/>
            </div>
        </div>
    )

}

export default Disk;
