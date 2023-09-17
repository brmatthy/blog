import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import { getNameByProjectUrl, getProjectMetaData, getThumbnailUrl } from "../../scripts/ProjectFetcher";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useHistory, useNavigate, useSearchParams } from 'react-router-dom';
import TagBtn from './TagBtn'

function ProjectCard({projectUrl, projectMeta, projectThumbnailUrl}){
    const [searchparams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    function handleRoute(){
        navigate(`${projectUrl.split('/').pop()}`);

    }   
    
    return (

        <Card sx= {{ maxWidth:400, m:1, display: 'flex', flexDirection: 'column'}}>
            <CardActionArea onClick={handleRoute} sx= {{  display: 'flex', flexDirection: 'column', flexGrow:1 }}>
                <CardMedia
                    component="img"
                    image={projectThumbnailUrl}
                />
                <CardContent sx= {{flexGrow:1}}>
                    <Typography variant="h5">
                        {projectMeta.title}
                    </Typography>
                    <Box color="text.secondary" display='flex' sx={{ mb:2}}>
                        <CalendarMonthIcon fontSize="small"/>
                        <Typography variant="body2">
                            {projectMeta.day}-{projectMeta.month}-{projectMeta.year}

                        </Typography>
                    </Box>
                    <Typography variant="body2">
                        {projectMeta.description}
                    </Typography>
                    
                </CardContent>
                
            </CardActionArea>
            <CardActions sx={{ display:'flex', flexWrap:'wrap', alignContent: 'flex-start'}}>
                {projectMeta.tags.map((tag) => <TagBtn 
                                                    key={tag}
                                                    tag={tag} 
                                                    onClick={() => setSearchParams({'tag':tag})}
                                                    variant='outlined'
                                                /> )}
            </CardActions> 
        </Card>
    );

}

export default ProjectCard;