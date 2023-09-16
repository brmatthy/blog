import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import { getNameByProjectUrl, getProjectMetaData, getThumbnailUrl } from "../../scripts/ProjectFetcher";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useHistory, useNavigate } from 'react-router-dom';

function ProjectCard({projectUrl}){
    const [projectMeta, setProjectMeta] = useState({"tags": []});
    const [projectThumbnailUrl, setProjectThumbnailUrl] = useState("");

    useEffect(() => {
        async function fetchMetaData(){
            setProjectMeta(await getProjectMetaData(projectUrl));
        }
        fetchMetaData();
    })

    useEffect(() => {
        async function fetchThumbnailUrl(){
            setProjectThumbnailUrl(await getThumbnailUrl(projectUrl));
        }
        fetchThumbnailUrl();
    })
    const navigate = useNavigate();
    function handleRoute(){
        navigate(`${projectUrl.split('/').pop()}`);

    }   
    
    return(
        <Card sx= {{ maxWidth:400, m:1}}>
            <CardActionArea onClick={handleRoute}>
                <CardMedia
                    component="img"
                    image={projectThumbnailUrl}
                />
                <CardContent>
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
            <CardActions sx={{ display:'flex', flexWrap:'wrap'}}>
                {projectMeta.tags.map((tag) =>
                    <Button
                        key={tag} 
                        color="secondary"
                        size="small"
                        variant="outlined"
                        sx={{
                            textTransform: 'capitalize'
                        }}
                    >
                            {tag}
                    </Button>
                )
                }
            </CardActions> 
        </Card>
    );

}

export default ProjectCard;