import { StartFunc as AddListenersPostShowDataStartFunc } from "./AddListenersPostShowData.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let jVarGlobalTokenName = "KUMAToken";
let jVarGlobalUserKey = "KUMAUserName";
let jVarGlobalFirmKey = "FirmDetails";
let jVarGlobalModalId = "LoginModalId";
let jVarGlobalAdminSubRoute = "JSONUser";
let jVarGlobalUserLocalStorageKey = "kUserName";
let jVarGlobalFirmDetailsLocalStorageKey = "FirmDetails";

let StartFunc = async () => {
    StartFuncAdminData({
        inSubRoute: jVarGlobalAdminSubRoute,
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });
    // inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId 

    // AddListenersStartFunc({
    //     inSubRoute: jVarGlobalAdminSubRoute,
    //     inUserKey: jVarGlobalUserKey,
    //     inFirmKey: jVarGlobalFirmKey,
    //     inTokenName: jVarGlobalTokenName,
    //     inModalId: jVarGlobalModalId
    // });

    // CheckTokenStartFunc({
    //     inUserKey: jVarGlobalUserKey,
    //     inFirmKey: jVarGlobalFirmKey,
    //     inTokenName: jVarGlobalTokenName,
    //     inModalId: jVarGlobalModalId
    // });

    AddListenersPostShowDataStartFunc({
        inUserLocalStorageKey: jVarGlobalUserLocalStorageKey,
        inFirmDetailsLocalStorageKey: jVarGlobalFirmDetailsLocalStorageKey
    });

};

StartFunc().then();