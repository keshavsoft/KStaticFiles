import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom.js";
import ApiConfigJson from '../../../ApiConfig.json' assert {type: 'json'};

let jVarCommonProjectName = ApiConfigJson.ProjectName;

jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(() => {
    StartFuncAddlisteners({ inProjectName: jVarCommonProjectName });
});
