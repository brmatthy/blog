const fs = require('fs');
const path = require('path');
const showdown = require('showdown');

function getProjectsDir(){
    return path.join(__dirname, '..', 'public', 'projects');
}

function getBaseUrl(req){
    return `${req.protocol}://${req.hostname}:${req.connection.localPort}`;
}

function projectFolderExists(projectName){
    try{
        const contents = fs.readdirSync(getProjectsDir());
        return contents.includes(projectName);
    }catch{
        return false;
    }
}

function getAllProjectFolders(){
    try {
        return fs.readdirSync(getProjectsDir());
    } catch (_) {
        return [];
    }
}

function getAllProjectUrls(req){
  const folders = getAllProjectFolders();
  const baseUrl = getBaseUrl(req);
  const urls = [];
  for(const folder of folders){
    urls.push(`${baseUrl}/${folder}`);
  }
  return urls;
}

function getProjectUrls(req){
    const projectName = req.params.projectName;
    if(!projectFolderExists(projectName)){
        return null;
    }
    const baseUrl = getBaseUrl(req);
    const json = {
        "meta": `${baseUrl}/projects/${projectName}/meta.json`,
        "thumbnail": `${baseUrl}/projects/${projectName}/thumbnail.jpg`,
        "page": `${baseUrl}/${projectName}/page`
    }
    return json;
}

function pageToHTML(mdPath){
    // get the md file as a string
    let md;
    try{
        md = fs.readFileSync(mdPath, 'utf-8');
    }catch{
        return null;
    }

    // convert to html
    const converter = new showdown.Converter();
    const html = converter.makeHtml(md);

    return html;
}

function getProjectHTML(req){
    const projectName = req.params.projectName;
    if(!projectFolderExists(projectName)){
        return null;
    }
    const baseUrl = getBaseUrl(req);
    const mdPath = path.join(getProjectsDir(), projectName, 'page.md');
    let html = pageToHTML(mdPath);
    const json = {
        "project": `${baseUrl}/${projectName}`,
        "page": html
    }
    return json;
}


module.exports = {
    getAllProjectUrls,
    getProjectUrls,
    getProjectHTML,
}