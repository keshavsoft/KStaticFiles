import { jFUpdateFunc } from "./Screen/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Screen/ShowOnDom.js";
import ApiConfigJson from '../ApiConfig.json' assert {type: 'json'};

let jVarCommonProjectName = ApiConfigJson.ProjectName;


jFCreateFoldersToDom({inProjectName: jVarCommonProjectName}).then(FromjFCreateFoldersToDom => {
    jFUpdateFunc({inProjectName: jVarCommonProjectName});
});
