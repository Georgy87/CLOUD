import React from "react";
import "../file/File.css";

function File({ file }) {
    return (
        <div className="file">
            {file.type === 'dir' ? <div src="" alt="" className="file__img">Direct</div> :
            <div src="" alt="" className="file__img">File</div>}
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
}

export default File;
