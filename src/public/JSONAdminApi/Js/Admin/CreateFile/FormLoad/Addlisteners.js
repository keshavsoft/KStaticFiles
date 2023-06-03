import { StartFunc as StartFuncCreateFolderButton } from "./ListenerFuncs/CreateFolderButton.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("CreateFileButtonClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncCreateFolderButton({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };