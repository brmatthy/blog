import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/about/About';
import Project from './pages/projects/Project';
import MainLayout from './components/MainLayout'
import NotFound from "./pages/NotFound";
import Projects from "./pages/projects/Projects";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";


let theme = createTheme({
    palette: {
        primary: {
            main: "#d4c485",
            contrastText: "#fffdf7"
        },
        secondary: {
            main: "#d47c6e",
            contrastText: "#fffdf7"
        },
        info: {
            main: "#73b7c7",
        },
        background: {
            main: "#faf6ee",
            contrastText: '#b68f77'
        }
    },
    /*typography: {
        fontFamily: "'Roboto'",
        h1: {
            fontFamily: "'Montserrat Thin'"
        },
        h2: {
            fontFamily: "'Roboto'"
        },
        h3: {
            fontFamily: "'Roboto'"
        },
        h4: {
            fontFamily: "'Roboto'"
        }
    },*/
});

theme = responsiveFontSizes(theme);


function App() {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectName" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;