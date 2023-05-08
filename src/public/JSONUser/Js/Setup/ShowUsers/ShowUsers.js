import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
import { StartFunc as CheckTokenStartFunc } from "../../AdminData/CheckToken.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";

let jVarGlobalTokenName = "KUMAToken";
let jVarGlobalUserKey = "KUMAUserName";
let jVarGlobalFirmKey = "FirmDetails";
let jVarGlobalModalId = "LoginModalId";
let jVarGlobalAdminSubRoute = "JSONUser";

let StartFunc = async () => {
    AddListenersStartFunc({
        inSubRoute: jVarGlobalAdminSubRoute,
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });

    CheckTokenStartFunc({
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });

    StartFuncShowData();
};

StartFunc();
