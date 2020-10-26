import React from "react";

function Inputs(props) {
    return (
        <div>
            <input
                defaultValue={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Inputs;
