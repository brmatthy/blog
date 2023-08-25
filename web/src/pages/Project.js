import React from 'react';
import {useParams} from "react-router-dom";

function Project(){
    // get project name from route
    const {projectName} = useParams()

    return (
        <div>
            <h1> Project page of the project {projectName}. </h1>
        </div>
    );
}
export default Project;