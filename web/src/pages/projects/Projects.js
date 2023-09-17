import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getAllProjectUrls, getAllTags } from '../../scripts/ProjectFetcher';
import { Card, Grid, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import TagBtn from './TagBtn';


function Projects(){
    const [projectUrls, setProjectUrls] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchparams, setSearchParams] = useSearchParams();
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        async function fetchProjectUrls(){
            setProjectUrls(await getAllProjectUrls())
        }
        fetchProjectUrls();
    }, []);

    useEffect(() => {
        async function fetchTags(){
            setTags(await getAllTags());
        }
        fetchTags();
    }, []);

    
    
    return (
        <div>
            <Box sx={{display:'flex'}}>
                <TagBtn tag='all' onClick={() => {
                    const params = searchparams;
                    params.delete('tag');
                    setSearchParams(params);
                }} />
                {tags.map((tag) => <TagBtn 
                                        key={tag} 
                                        tag={tag}
                                        onClick={() => setSearchParams({'tag':tag})}
                                    />)}
            </Box>
            <Grid container my={1} >
                {projectUrls.map((projectUrl) => 
                    <Grid item key={projectUrl} xs={12} sm={6} md={4} display='flex' justifyContent='center'>
                        <ProjectCard key={projectUrl} projectUrl={projectUrl} />
                    </Grid>
                    )
                }
            </Grid>
        </div>
    );
}
export default Projects;