import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { getProjectPage, getProjectUrlByName } from '../../scripts/ProjectFetcher';
import NotFound from '../NotFound';
import { useTheme } from '@emotion/react';



function HTMLRenderer_old({ html }){
    function createMarkup(){
        return { __html: html };
    }
    return(
        <div dangerouslySetInnerHTML={createMarkup()} />
    )
}

function HTMLRenderer({ html }) {

  const theme = useTheme();

  // Define the styles for h1 and p tags
  const tagStyles = {
    h1: {
      color: theme.palette.background.contrastText,
    },
    h2: {
      color: theme.palette.background.contrastText,
    },
    h3: {
      color: theme.palette.background.contrastText,
    },
    h4: {
      color: theme.palette.background.contrastText,
    },
    h5: {
      color: theme.palette.background.contrastText,
    },
    h6: {
      color: theme.palette.background.contrastText,
    },
    p: {
        color: theme.palette.background.contrastText,
    },
    body1:{
        color: theme.palette.background.contrastText,
    }
  };

  function createMarkup() {
    return { __html: html };
  }

  // Apply styles to the HTML content using inline styles
  function applyStylesToHtml(htmlString) {
    // Replace h1 and p tags with inline styles
    for (const tag in tagStyles) {
      if (tagStyles.hasOwnProperty(tag)) {
        const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 'g');
        const replacement = `<${tag} style="${stylesToString(tagStyles[tag])}">$1</${tag}>`;
        htmlString = htmlString.replace(regex, replacement);
      }
    }
    return htmlString;
  }

  // Helper function to convert style object to string
  function stylesToString(styles) {
    return Object.keys(styles)
      .map((property) => `${property}:${styles[property]}`)
      .join(';');
  }

  const styledHTML = applyStylesToHtml(html);

  return <div dangerouslySetInnerHTML={{ __html: styledHTML }} />;
}

function Project(){
    // get project name from route
    const {projectName} = useParams();
    
    const [pageHTML, setpageHTML] = useState('<div/>');

    useEffect(() =>{
        async function fetchProjectHTML(){
            const projectUrl = await getProjectUrlByName(projectName);
            if(projectUrl == null){
              console.log(projectUrl);
                setpageHTML("");
                return;
            }
            const pageHTML = await getProjectPage(projectUrl);
            setpageHTML(pageHTML);
        }
        fetchProjectHTML();
    }, []);

    return (
        <div>
            {pageHTML == "" ?
                <NotFound/> :
                <HTMLRenderer html={pageHTML}/>
            }
        </div>
    );
}
export default Project;