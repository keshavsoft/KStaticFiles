import { jFUpdateFunc } from "./KDataset/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDataset/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
