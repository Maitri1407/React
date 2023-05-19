import React from "react";
import Practice1 from "./practice1";

function Practice(props){
    let {name,corse}=props;
    console.log(props)
    return(
        <>
        <div>
            This is practice page of {name}
        </div>
       <Practice1 name={name}/>
        </>
    )
}
export default Practice