const fs = require('fs');
const path = require('path');

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
        "page": `${baseUrl}/projects/${projectName}/page.md`
    }
    return json;
}


module.exports = {
    getAllProjectUrls,
    getProjectUrls,
}