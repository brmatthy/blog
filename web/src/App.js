import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import MainLayout from './components/MainLayout'
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
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
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:projectName" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;