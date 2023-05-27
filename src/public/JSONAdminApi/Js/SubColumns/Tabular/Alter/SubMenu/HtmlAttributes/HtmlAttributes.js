import { jFUpdateFunc } from "./AddListeners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
