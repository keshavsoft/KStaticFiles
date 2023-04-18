import { jFUpdateFunc } from "./DuplicateFolder/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DuplicateFolder/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
});
