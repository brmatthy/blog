import React from 'react';
import {Box, Grid, Typography} from '@mui/material'
import CourseCard from './CourseCard';
import PaletteIcon from '@mui/icons-material/Palette';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Home(){
    const cardContents = [
        {
            title:"Art",
            icon:() => <PaletteIcon/>,
            courses:[
                {
                    name: '3D I, Game Art I, II (Maya, Blender, Substance Painter)',
                    tutors: 'DAE, Milan Van Damme, Goedele Godfroid, Alexander Delagrange, Nico Cluckers, Luna'  
                },
                {
                    name: '2D for Games I, II (Photoshop)',
                    tutors: 'DAE, Luna Fierens, Goedele Godfroid'  
                },
                    {
                    name: 'Visual Technologies',
                    tutors: 'DAE, Robin Rodet'  
                },
                    {
                    name: 'Lightroom (photo editing)',
                    tutors: 'Marcin Mikus'  
                },
                    {
                    name: 'Photography',
                    tutors: 'MC, Annie Leibovitz'  
                },
                    {
                    name: 'Motion Capture (workshop)',
                    tutors: 'DAE, Glenn Van Waesberghe'  
                },
                        {
                    name: 'Drawing',
                    tutors: 'Jason Batchelor'  
                },
            ]
        },
        {
            title:"Game Development",
            icon:() => <SportsEsportsIcon/>,
            courses:[
                {
                    name: 'Platform Development I, II (C#, Unity)',
                    tutors: 'DAE, Jef Daels, Stijn Van Coillie, Steven Verborgh'  
                },
                {
                    name: 'Game Design I, II',
                    tutors: 'DAE, Stijn Van Coillie, Yosha Vandaele, Jorge Monterubio Sanudo'  
                },
                    {
                    name: 'Game History',
                    tutors: 'DAE, Robin Rodet'  
                },
                    {
                    name: 'Game Design',
                    tutors: 'MC, Will Wright'  
                },
            ]
        },
        {
            title:"Buisiness",
            icon:() => <SportsEsportsIcon/>,
            courses:[
                {
                    name: 'Game Entrepreneurship I, II, Communication',
                    tutors: 'DAE, Luc Peeters, Marijn Verspecht'  
                },
                 {
                    name: 'Business Theory, Business Skills',
                    tutors: 'CSE, Hendrik Van Landeghem, Mieke Audenaert'  
                },
                 {
                    name: 'Macro-Economics',
                    tutors: 'CSE, Freddy Heylen'  
                },
                 {
                    name: 'Starting Up',
                    tutors: 'Aalto University'  
                },
                 {
                    name: 'Music Business',
                    tutors: 'Steven Melin'  
                },
            ]
        },
        {
            title:"Songwriting & Music Production",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Trailer Music Production',
                    tutors: 'Richard Schrieber'  
                },
                {
                    name: 'Film, TV, Videa Game Music Production',
                    tutors: 'Steven Melin'  
                },
                 {
                    name: 'Music Theory',
                    tutors: 'Music Academy Ghent'  
                },
                 {
                    name: 'Producing Rock',
                    tutors: 'Phil Allen'  
                },
                 {
                    name: 'Songwriting & Producing',
                    tutors: 'MC, Alicia Keys'  
                },
                 {
                    name: 'Analogue Synthesis (workshop)',
                    tutors: 'Valery Vermeulen'  
                },
                 {
                    name: 'Producing Trap',
                    tutors: 'K Theory'  
                },
                 {
                    name: 'Guitar Tone Design',
                    tutors: 'David Wills'  
                },
 
            ]
        },
        {
            title:"Audio Mixing",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Recording & Mixing Punk Rock',
                    tutors: 'Bradley Cook'  
                },
                {
                    name: 'Mixing Hard Rock',
                    tutors: 'ob Marlette'  
                },
                 {
                    name: 'Mixing Roxk',
                    tutors: 'Ulrich Wild'  
                },
 
            ]
        },
       {
            title:"Storywriting",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Storytelling',
                    tutors: 'MC, Neil Gaiman'  
                },
                {
                    name: 'Independent FIlmmaking, Filmmaking',
                    tutors: 'MC, Spike Lee, Jodie Foster'  
                },
 
            ]
        },
        {
            title:"Computer Science",
            icon:() => <SportsEsportsIcon/>,
            courses:[
                {
                    name: 'Inforamtics (Python), Software Development (Java), Programming (C, C++)',
                    tutors: 'CSE, Bart Dhoudt, Filip De Turck'  
                },
                {
                    name: 'Multimedia Technologies, Design of Multimedia Applications, Computer Graphics',
                    tutors: 'CSE, Peter Lambert, Glenn Van Wallendael, Aleksandra Pizurica'  
                },
                {
                    name: 'Machine Learning, Deep Learning, Artificial Intelligence, Deep Generative Models',
                    tutors: 'CSE, Joni Dambre, Aleksandra Pizurica, Cedric De Boom'  
                },
                {
                    name: 'Algorithms & Data Structures, Databases, Big Data Science',
                    tutors: 'CSE, Tom Dhaene Guy De Tré, Erik Mannens'  
                },
                {
                    name: 'Computer Architecture, Operating Systems',
                    tutors: 'CSE, Koen De Bosschere'  
                },
                {
                    name: 'Communication Networks, Mobile & Broadband Access Networks',
                    tutors: 'CSE, Piet Demeester, Ingrid Moerman'  
                },
                {
                    name: "Master's Dissertation on deep learning applied to music composition",
                    tutors: 'CSE, Cedric De Boom'  
                },
                {
                    name: 'Formal System Modelling for Software, Information Security',
                    tutors: 'CSE, Eric Laermans'  
                },                {
                    name: 'Parallel & Distributed Software Systems, Parallel Computer Systems',
                    tutors: 'CSE, Jan Fostier, LIeven Eeckhout'  
                },
                {
                    name: 'Robotic Process Automation (summer course)',
                    tutors: 'UIPath'  
                },
            ]
        },
        {
            title:"Mathematics",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Mathematical Analysis I, II, III, Basic Mathematics',
                    tutors: 'CSE, Hennie De Schepper, Hendrik De Bie'  
                },
                {
                    name: 'Probability & Statistics, Applied Probability',
                    tutors: 'CSE, Gert De Cooman, Sabine Wittevrongel'
                },
                {
                    name: 'Discrete Mathematics I, II',
                    tutors: 'CSE, Mario Pickavet, Joris Walraevens',
                },
                {
                    name: 'Geometry & Linear Algebra',
                    tutors: 'CSE, Hennie De Schepper',
                },
                {
                    name: 'Communication Theory, Information Theory',
                    tutors: 'CSE, Marc Moeneclaey, Heidi Steendam',
                },
                {
                    name: 'Automatons, Queueing Analysis & Simulation',
                    tutors: 'CSE, Sabine Wittevrongel, Joris Walraevens',
                }
            ]
        },
        {
            title:"Engineering",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Design Project',
                    tutors: 'CSE Femke De Backere, Dirk Stroobandt, Filip De Turck'  
                },
                {
                    name: 'Engineering Project I, II, III',
                    tutors: 'CSE, Johan Bauwelinck, Francis Wyffels, Maria Torres Vega'  
                },
                 {
                    name: 'Materials Technology, Material Mechanics',
                    tutors: 'CSE, Kim Verbeken, Wim Van Paepegem'  
                },
                 {
                    name: 'Systems & Signals',
                    tutors: 'CSE, Rik Van De Walle'  
                },
                 {
                    name: 'Electrical Circuits & Networks, Digital Electronics',
                    tutors: 'CSE, Kristiaan Neyts, Joni Dambre'  
                },
 
            ]
        },
         {
            title:"Science",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Physics I, II',
                    tutors: 'CSE, Christophe Leys'  
                },
                {
                    name: 'Research Project',
                    tutors: 'CSE, Joris Walreavens'  
                },
                 {
                    name: 'Philosopy & Science',
                    tutors: 'CSE, Maarten Van Dyck'  
                },
                 {
                    name: 'Chemistry',
                    tutors: 'CSE, Marie-Françoise Reyniers'  
                },
 
            ]
        },
         {
            title:"Music Performance",
            icon:() => <div/>,
            courses:[
                {
                    name: 'Classical Guitar (private tutoring)',
                    tutors: 'Music Academy Ghent, Ruben Minguez'  
                },
                {
                    name: 'Electric Guitar (private tutoring)',
                    tutors: 'Music Academy Ghent, Edmund Lauret'  
                },
                 {
                    name: 'Electric Guitar (masterclass)',
                    tutors: 'Ruud Jolie'  
                },
                 {
                    name: 'Jazz Band',
                    tutors: 'Music Academy Ghent, Stijn Engels'  
                },
                 {
                    name: 'Complete Vocal Technique',
                    tutors: 'Catherine Sadolin'  
                },
                 {
                    name: 'Singing (private tutoring)',
                    tutors: 'Sarah Algoet, Kristina Van Duyse'  
                },
                 {
                    name: 'Singing',
                    tutors: '30DaySinger, Jonathan Estabrooks, Camille Van Niekerk, Abram Poliakoff'  
                },
                 {
                    name: 'Singing',
                    tutors: 'MC, Christina Aguilera'  
                },
 
            ]
        },
 
    ]

    function firstHalf(){
        return cardContents.slice(0, Math.ceil(cardContents.length /2))
    }

    function lastHalf(){
        return cardContents.slice(Math.ceil(cardContents.length /2), cardContents.length)
    }

    return (
        <Box>
            <Grid container >
                <Grid item xs={4}>
                    <img src='http://localhost:8080/images/about/tijmen_01.jpg' style={{ maxWidth: '100%', maxHeight: '100%' }}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h2' color='background.contrastText'>
                        Hi!
                    </Typography>
                    
                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    {
                        firstHalf().map((card) => {
                            return <CourseCard title={card.title} icon={card.icon} courses={card.courses}/>
                        })
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    {
                        lastHalf().map((card) => {
                            return <CourseCard title={card.title} icon={card.icon} courses={card.courses}/>
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    );
}
export default Home;