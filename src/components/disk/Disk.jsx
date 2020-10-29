import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getFiles} from "../../actions/file";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector((state) => state.files.current);
    console.log(currentDir)
    useEffect(() => {

        dispatch(getFiles(currentDir));
    }, [currentDir]);
    return <div>Disk</div>;
}

export default Disk;
