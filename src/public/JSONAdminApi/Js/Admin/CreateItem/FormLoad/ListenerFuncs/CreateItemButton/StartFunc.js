import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        jFLocalPostFetch({
            inFromFetch: response,
            inBodyData: jVarLocalBodyData
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalHtmlId = "CreateFileInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    if (jVarLocalFileNameValue === "") {
        jVarLocalFileName.classList.add("is-invalid");
        jVarLocalFileName.focus();
        return false;
    };

    return true;
};

let jFLocalPostFetch = ({ inFromFetch, inBodyData }) => {
    if (Array.isArray(inFromFetch)) {
      //  jFLocalPostFetchAsArray({ inFromFetch, inBodyData });
    };
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inBodyData}) => {
    const myUrlWithParams = new URL(window.location.href);

    let jVarLocalFromConfig = inFromFetch.find(element => {
        return element.ConfigFolderCreated
    });

    if (jVarLocalFromConfig === undefined === false) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
        // const alert = bootstrap.Alert.getOrCreateInstance('#ConfigFolderInsertSuccessId');
        // alert.close();
    };

    let jVarLocalFromData = inFromFetch.find(element => {
        return element.DataFolderCreated
    });

    if (jVarLocalFromData === undefined === false) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
        // const alert = bootstrap.Alert.getOrCreateInstance('#DataFolderInsertSuccessId');
        // alert.close();
    };

    let jVarLocalAnyCreated = inFromFetch.filter(element => {
        return element.KTF
    });

    // FolderCreated

    if (jVarLocalAnyCreated.length > 0) {
        myUrlWithParams.searchParams.append("NewFileName", inNewFileName);
        window.location.href = myUrlWithParams.href;
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem`;

    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    };

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };