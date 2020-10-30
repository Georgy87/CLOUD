import React from "react";
import File from "../fileList/file/File";

const FileList = () => {
    const obj = [
        { _id: 1, name: "direc", type: "dir", size: "5gb", date: "20.02.2020" },
        { _id: 2, name: "direc2", type: "dir", size: "5gb", date: "20.02.2020" },
    ];
    const files =  obj.map((file) => (
        <File key={file._id}/>
    ));
    return (
        <div>
            <div>
                <div>Название</div>
                <div>Дата</div>
                <div>Размер</div>
            </div>
        </div>
    );
};

export default FileList;
