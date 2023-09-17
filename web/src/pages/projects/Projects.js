import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getAllProjectUrls, getAllTags, getProjectMetaData, getThumbnailUrl } from '../../scripts/ProjectFetcher';
import { Card, Grid, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import TagBtn from './TagBtn';


function Projects(){
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchparams, setSearchParams] = useSearchParams();
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        async function fetchProjectMedaData(projectUrl){
            return(await getProjectMetaData(projectUrl));
        }
        
        async function fetchThumbnailUrl(projectUrl){
            return(await getThumbnailUrl(projectUrl));
        }

        async function fetchProjectsData(){
            const projectUrls = await getAllProjectUrls();
            const projectList = []; 
            for(const projectUrl of projectUrls){
                projectList.push({
                    'url': projectUrl,
                    'meta': await fetchProjectMedaData(projectUrl),
                    'thumbnailUrl': await fetchThumbnailUrl(projectUrl) 
                });
            }
            setProjects(projectList);
        }
        fetchProjectsData();

   },[]);

    useEffect(() => {
        async function fetchTags(){
            setTags(await getAllTags());
        }
        fetchTags();
    }, []);

    useEffect(() => {
        setSelectedTag(searchparams.get('tag'));
    }, [searchparams])

    
    
    return (
        <div>
            <Box sx={{display:'flex', justifyContent:'center', mt:2}}>
                <TagBtn tag='all' onClick={() => {
                    const params = searchparams;
                    params.delete('tag');
                    setSearchParams(params);
                }} mx={0.5} variant={selectedTag == null ? 'contained' : 'outlined'} />
                {tags.map((tag) => <TagBtn 
                                        key={tag} 
                                        tag={tag}
                                        onClick={() => setSearchParams({'tag':tag})}
                                        mx={0.5}
                                        variant={selectedTag === tag ? 'contained' : 'outlined'}
                                    />)}
            </Box>
            <Grid container my={1} >
                {projects.map((project) =>
                    {
                        return (project.meta.tags.includes(String(selectedTag)) || selectedTag == null) ?  
                            <Grid item key={project.url} xs={12} sm={6} md={4} display='flex' justifyContent='center'>
                                <ProjectCard projectUrl={project.url} projectMeta={project.meta} projectThumbnailUrl={project.thumbnailUrl}/>
                            </Grid> :
                            null
                    }
                    )
                }
            </Grid>
        </div>
    );
}
export default Projects;