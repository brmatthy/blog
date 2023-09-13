

const fs = require('fs');
const path = require('path');

function getProjectsDir(){
    return path.join(__dirname, '..', '..', 'projects');
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

function projectFileExists(projectName, fileName){
    const filePath = path.join(getProjectsDir(), projectName, fileName);
    try{
        return fs.existsSync(filePath);
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
        "meta": `${baseUrl}/${projectName}/meta`,
        "thumbnail": `${baseUrl}/${projectName}/thumbnail`,
        "page": `${baseUrl}/${projectName}/page`
    }
    return json;
}

function getMetaOfProject(req){
    const projectName = req.params.projectName;
    if(!projectFolderExists(projectName)){
        return null;
    }
    const fileName = 'meta.json';
    if(!projectFileExists(projectName, fileName)){
        return null;
    }
    return true;
}

function getThumbnailOfProject(req){
    const projectName = req.params.projectName;
    if(!projectFolderExists(projectName)){
        return null;
    }
    const fileName = 'thumbnail.jpg';
    if(!projectFileExists(projectName, fileName)){
        return null;
    }
    return true;
}

function getPageOfProject(req){
    const projectName = req.params.projectName;
    if(!projectFolderExists(projectName)){
        return null;
    }
    const fileName = 'page.md';
    if(!projectFileExists(projectName, fileName)){
        return null;
    }
    return true;
}

module.exports = {
    getAllProjectUrls,
    getProjectUrls,
    getMetaOfProject,
    getThumbnailOfProject,
    getPageOfProject
}