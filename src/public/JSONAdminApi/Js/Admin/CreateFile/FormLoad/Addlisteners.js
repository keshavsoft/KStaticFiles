import { StartFunc as StartFuncCreateFolderButton } from "./ListenerFuncs/CreateFolderButton.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("CreateFileButtonClass");
    let jVarLocalShowButtonClass = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncCreateFolderButton({
                inEvent: event,
                inProjectName
            });
        });
    };

    for (let i = 0; i < jVarLocalShowButtonClass.length; i++) {
        jVarLocalShowButtonClass[i].addEventListener("click", async (event) => {
            await jFLocalButtonClickFunc({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };

let jFLocalButtonClickFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfileName = jVarLocalCurrentTarget.dataset.filename;

    let jVarLocalNewLocation = "";
    jVarLocalNewLocation += `/JSONAdminApi/Html/Admin/CreateNew/CreateItem.html?inFolderName=${jVarLocalFolderName}&inFileName=${jVarLocalfileName}`
    window.location = jVarLocalNewLocation;

};