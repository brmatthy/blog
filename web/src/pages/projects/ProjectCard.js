import React, { useEffect, useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Typography } from '@mui/material'
import { getProjectMetaData, getThumbnailUrl } from "../../scripts/ProjectFetcher";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
    
    return(
        <Card sx= {{ maxWidth:400, m:1}}>
            <CardActionArea>
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
                    <Divider variant="middle" sx={{my:1}}/>
                    <Box display='flex' justifyContent='center'>
                    {projectMeta.tags.map((tag) =>
                        <Chip
                            key={tag} 
                            label={tag}
                            sx={{ mr:1, }}
                            color="secondary"
                        />
                    )
                    }
                </Box>
                </CardContent>
                
            </CardActionArea>
        </Card>
    );

}

export default ProjectCard;