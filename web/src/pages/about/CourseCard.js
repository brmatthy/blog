import React from "react";
import { Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

function CourseCard({title, icon, courses}){
    return(
        <Card sx={{ maxWidth:600, borderColor:'primary.main', m:1}} variant="outlined">
            <CardContent>
                <Box display='flex' flexDirection='row' color='background.contrastText'>
                    {icon()}
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography> 
                </Box>
                <List>
                    {courses.map((course) => {
                        return <ListItem key={course.name} >
                            <Box color='background.contrastText'>
                            <ListItemText primary={course.name}/>
                            <ListItemText secondary={course.tutors} sx={{ ml:1 }}/>
                            </Box>
                        </ListItem>
                    })}
                </List>

            </CardContent>
        </Card>
    );
}

export default CourseCard;