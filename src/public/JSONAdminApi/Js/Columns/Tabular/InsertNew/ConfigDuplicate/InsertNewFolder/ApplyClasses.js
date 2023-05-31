let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {

        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
};


let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

let LocalForApplyClasses = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    let jVarLocalFirstFile;
    let jVarLocalFirstItem;
    let jVarLocalFirstScreen;
    console.log("aaaaaaaaaaaa : ", indataFromApi);
    if ("Folders" in indataFromApi) {
        if (Object.values(indataFromApi.Folders).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Folders)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

            if ("Files" in jVarLocalFirstFolder) {
                if (Object.values(jVarLocalFirstFolder.Files).length > 0) {
                    jVarLocalFirstFile = Object.values(jVarLocalFirstFolder.Files)[0];
                    jVarLocalFirstFile.TabPaneClass = " show active";
                    jVarLocalFirstFile.ButtonClass = " active";

                    if ("Items" in jVarLocalFirstFile) {
                        if (Object.values(jVarLocalFirstFile.Items).length > 0) {
                            jVarLocalFirstItem = Object.values(jVarLocalFirstFile.Items)[0];
                            jVarLocalFirstItem.ShowOnLoad = true;

                            if ("Screens" in jVarLocalFirstItem) {
                                if (Object.values(jVarLocalFirstItem.Screens).length > 0) {
                                    jVarLocalFirstScreen = Object.values(jVarLocalFirstItem.Screens)[0];
                                    jVarLocalFirstScreen.CollapseClass = " show";
                                };
                            };
                        };
                    };
                };

            };

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalFolderName = inQueryParamsAsObject.inFolderName;
    let jVarLocalCloneNameValue = inQueryParamsAsObject.inToFolderName;

    Swal.fire(`${jVarLocalCloneNameValue} Folder Duplicated Sucessfully from ${jVarLocalFolderName}..&#128522`)


    if ("Folders" in indataFromApi) {
        if (jVarLocalFolderName in indataFromApi.Folders) {
            indataFromApi.Folders[jVarLocalFolderName].TabPageClass = " show active";
            indataFromApi.Folders[jVarLocalFolderName].MenuClass = " active";
            indataFromApi.Folders[jVarLocalCloneNameValue].RowClass = " table-success";


            // if ("Files" in indataFromApi.Folders[jVarLocalFolderName]) {
            //     if (jVarLocalFileName in indataFromApi.Folders[jVarLocalFolderName].Files) {
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].TabPaneClass = " show active";
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].ButtonClass = " active";

            // if ("Items" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName]) {
            //     if (jVarLocalItemName in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items) {
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].ShowOnLoad = true;
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalCloneNameValue].RowClass = " table-success";


            // if ("Screens" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName]) {
            //     if (jVarLocalScreenName in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens) {
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].CollapseClass = " show";
            //         indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalCloneNameValue].RowClass = " table-success";


            //     };
            // };
            // };
            // };
            // };
            // };

        };
    };
};

export { StartFunc }