let StartFunc = ({ inProjectName }) => {
    let jVarLocalShowButtonClass = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalShowButtonClass.length; i++) {
        jVarLocalShowButtonClass[i].addEventListener("click", async () => {
            await jFLocalButtonClickFunc({
                inEvent: event,
                inProjectName
            });
        });
    };
};

let jFLocalButtonClickFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;

    let jVarLocalNewLocation = "";
    jVarLocalNewLocation += `/JSONAdminApi/Html/Admin/CreateNew/CreateFile.html?inFolderName=${jVarLocalFolderName}`
    window.location = jVarLocalNewLocation;

};

export { StartFunc };