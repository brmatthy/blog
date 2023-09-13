import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getAllProjectUrls, getAllTags } from '../../scripts/ProjectFetcher';


function Projects(){
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchTags(){
            setTags(await getAllTags())
        }
        fetchTags();
    }, []);

    
    return (
        <div>
            <h1> Welcome to the projects page. </h1>
            {tags}
            <ProjectCard dir='/home/brent/projects/blog/web/src/pages/projects/example/'/>
        </div>
    );
}
export default Projects;