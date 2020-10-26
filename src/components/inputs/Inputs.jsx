import React from "react";

function Inputs(props) {
    console.log(props);
    return (
        <div>
            {/* <input type={props.type} placeholder={props.placeholder} /> */}
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

export default Inputs;
