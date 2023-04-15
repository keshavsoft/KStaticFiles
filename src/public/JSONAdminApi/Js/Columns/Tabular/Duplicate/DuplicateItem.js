import { jFUpdateFunc } from "./Item/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Item/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
});
