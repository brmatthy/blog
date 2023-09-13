
const API = 'http://localhost:8080/'

export async function getAllProjectUrls(){
    const res = await fetch(API);
    if(!res.ok){
        return [];
    }
    return await res.json();
}

export async function getProjectMetaData(projectUrl){
    let res = await fetch(projectUrl);
    if(!res.ok){
        return null;
    }
    const metaUrl = (await res.json()).meta;
    res = await fetch(metaUrl);
    if(!res.ok){
        return null;
    }
    return await res.json();

}

export async function getAllTags(){
    const tags = new Set([]);
    const projectUrls = await getAllProjectUrls();
    for(const projectUrl of projectUrls){
        const projectMetaData = await getProjectMetaData(projectUrl);
        if(projectMetaData == null){
            continue;
        }
        projectMetaData.tags.forEach( (tag) => {tags.add(tag)} );
    }
    return tags;
}