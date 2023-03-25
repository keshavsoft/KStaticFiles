import { jFUpdateFunc } from "./Duplicate/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Duplicate/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
});
