import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getAllProjectUrls, getAllTags } from '../../scripts/ProjectFetcher';
import { Card, Grid } from '@mui/material';


function Projects(){
    const [projectUrls, setProjectUrls] = useState([]);

    useEffect(() => {
        async function fetchProjectUrls(){
            setProjectUrls(await getAllProjectUrls())
        }
        fetchProjectUrls();
    }, []);

    
    return (
        <Grid container my={1} >
            {projectUrls.map((projectUrl) => 
                <Grid item key={projectUrl} xs={12} sm={6} md={4} display='flex' justifyContent='center'>
                    <ProjectCard key={projectUrl} projectUrl={projectUrl} />
                </Grid>
                )
            }
        </Grid>
    );
}
export default Projects;