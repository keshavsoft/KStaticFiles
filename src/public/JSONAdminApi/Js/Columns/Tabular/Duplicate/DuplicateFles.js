import { jFUpdateFunc } from "./DuplicateFiles/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DuplicateFiles/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
});
