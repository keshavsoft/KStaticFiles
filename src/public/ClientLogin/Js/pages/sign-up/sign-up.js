import { StartFunc as StartFuncAddListeners } from "./AddListeners.js";

let jVarCommonProjectName = "JSONUser";

const StartFunc = () => {
    StartFuncAddListeners({
        inProjectName: jVarCommonProjectName
    });
};

StartFunc();