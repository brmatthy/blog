import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getAllProjectUrls, getAllTags } from '../../scripts/ProjectFetcher';
import { Card } from '@mui/material';


function Projects(){
    const [projectUrls, setProjectUrls] = useState([]);

    useEffect(() => {
        async function fetchProjectUrls(){
            setProjectUrls(await getAllProjectUrls())
        }
        fetchProjectUrls();
    }, []);

    
    return (
        <div>
            {projectUrls.map((projectUrl) => 
                    <ProjectCard key={projectUrl} projectUrl={projectUrl} />
                )
            }
        </div>
    
    );
}
export default Projects;