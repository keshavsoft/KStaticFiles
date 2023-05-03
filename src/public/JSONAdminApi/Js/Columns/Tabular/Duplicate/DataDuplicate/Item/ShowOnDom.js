import { StartFunc as RowAndColumnsStartFunc } from "./ApplyClasses.js";

let jFCreateFoldersToDom = async ({inProjectName}) => {
    let jVarLocalFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/JsonItem/Duplicate/DuplicateItem`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    if (dataFromApi !== null) {
        RowAndColumnsStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }