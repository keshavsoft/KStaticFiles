import { jFUpdateFunc } from "./DuplicateFiles/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DuplicateFiles/ShowOnDom.js";
import ApiConfigJson from '../../ApiConfig.json' assert {type: 'json'};

let jVarCommonProjectName = ApiConfigJson.ProjectName;


jFCreateFoldersToDom({ inProjectName: jVarCommonProjectName }).then(FromjFCreateFoldersToDom => {
    jFUpdateFunc({ inProjectName: jVarCommonProjectName });
});
