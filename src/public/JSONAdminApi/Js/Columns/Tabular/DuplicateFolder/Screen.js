import { jFUpdateFunc } from "./Screen/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Screen/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
});
