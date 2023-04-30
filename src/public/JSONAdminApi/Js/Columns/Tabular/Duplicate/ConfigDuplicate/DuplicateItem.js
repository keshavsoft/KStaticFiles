import { jFUpdateFunc } from "./Item/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Item/ShowOnDom.js";
import ApiConfigJson from '../../ApiConfig.json' assert {type: 'json'};

let jVarCommonProjectName = ApiConfigJson.ProjectName;

jFCreateFoldersToDom({inProjectName: jVarCommonProjectName}).then(FromjFCreateFoldersToDom => {
    jFUpdateFunc({inProjectName: jVarCommonProjectName});
});
