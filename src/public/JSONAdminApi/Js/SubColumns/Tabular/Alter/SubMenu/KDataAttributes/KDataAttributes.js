import { jFUpdateFunc } from "./Addlisteners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    
    jFUpdateFunc();
});
