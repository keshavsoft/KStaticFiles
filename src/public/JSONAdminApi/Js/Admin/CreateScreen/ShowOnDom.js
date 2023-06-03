let jFCreateFoldersToDom = async ({ inProjectName }) => {
    let jVarLocalRoute = inProjectName;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/Duplicate/DuplicateScreen`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }