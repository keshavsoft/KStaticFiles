import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom.js";
import ApiConfigJson from '../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let jVarCommonProjectName = ApiConfigJson.ProjectName;

const StartFunc = () => {
    let jVarLocalFromAdmin = StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(() => {
            StartFuncAddlisteners({ inProjectName: jVarCommonProjectName });
        });
    };
};

StartFunc();

