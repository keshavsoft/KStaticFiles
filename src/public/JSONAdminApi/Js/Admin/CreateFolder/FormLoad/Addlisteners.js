let StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateFolderButtonId = document.getElementById("CreateFolderButtonId");

    jVarLocalCreateFolderButtonId.addEventListener("click", async () => {
        await jFLocalButtonClickFunc({
            inEvent: event,
            inProjectName
        });
    });
};

let jFLocalButtonClickFunc = async ({ inEvent, inProjectName }) => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder`;
    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName
        })
    }
    let response = await fetch(jFetchUrl, jFetchBody);

    console.log("response : ", response);
};

export { StartFunc };