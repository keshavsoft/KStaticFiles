import { StartFunc as StartFuncAddListeners } from "./AddListeners.js";

let jVarCommonProjectName = "JSONApi";

const StartFunc = () => {
    StartFuncAddListeners({
        inProjectName: jVarCommonProjectName
    });
};

StartFunc();