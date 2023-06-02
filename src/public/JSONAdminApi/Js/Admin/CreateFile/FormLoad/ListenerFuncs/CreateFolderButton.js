let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;


    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = jFLocalPreparePostData({inEvent});
        let jVarLocalFileName = jVarLocalBodyData.NewFileName;
        jVarLocalBodyData.FolderName = jVarLocalFolderName;

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        jFLocalPostFetch({
            inFromFetch: response,
            inNewFolderName: jVarLocalFolderName,
            inNewFileName: jVarLocalFileName
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {
    let jVarLocalHtmlId = "CreateFileInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalFileNameValue = jVarLocalFileName.value;


    if (jVarLocalFileNameValue === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    return true;
};

let jFLocalPostFetch = ({ inFromFetch, inNewFolderName, inNewFileName }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inNewFolderName, inNewFileName });
    };
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inNewFolderName, inNewFileName }) => {
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

let jFLocalPreparePostData = ({inEvent}) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    return {
        NewFileName: jVarLocalFileNameValue
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile`;
    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    }

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };