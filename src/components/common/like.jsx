// import React, { Component } from "react";

const Like = (props) => {
    let classes = "m-2 fa fa-heart";
    if (!props.liked) classes += "-o";
    return (<i onClick={props.onClick} className={classes} area-hidden="true" style={{cursor:"pointer"}}></i>);
};
 
export default Like;
