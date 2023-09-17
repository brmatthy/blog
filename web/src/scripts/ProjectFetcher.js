
const API = 'http://localhost:8080/'

export async function getAllProjectUrls(){
    const res = await fetch(API);
    if(!res.ok){
        return [];
    }
    return await res.json();
}

export async function getProjectUrlByName(projectName){
    const urls = await getAllProjectUrls();
    const names = urls.map((url) => {
        return url.split('/').pop();
    });
    const index = names.indexOf(projectName);
    if(index === -1){
        return null;
    }
    return urls[index];
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

export async function getThumbnailUrl(projectUrl){
    const res = await fetch(projectUrl);
    if(!res.ok){
        return '';
    }
    return (await res.json()).thumbnail;
}

export async function getProjectPage(projectUrl){
    let res = await fetch(projectUrl);
    if(!res.ok){
        return null;
    }
    const pageUrl = (await res.json()).page;
    res = await fetch(pageUrl);
    if(!res.ok){
        return null;
    }
    return (await res.json()).page;
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
    return Array.from(tags);
}

export async function getProjectUrlsWithTag(tag){
    const urls = await getAllProjectUrls();
    const projectUrls = []
    for(const projectUrl of urls){
        const projectMetaData = await getProjectMetaData(projectUrl);
        if(projectMetaData == null){
            continue;
        }
        // check if contains a valid tag
        if(projectMetaData.tags.includes(tag)){
            projectUrls.add(projectUrl);
        }
    }
    return projectUrls;
}