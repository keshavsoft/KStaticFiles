import { StartFunc as StartFuncButtoClickFunc } from "./Addlistoners/ButtoClickFunc.js";

let StartFunc = () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();
    StartFuncButtoClickFunc();

};
StartFunc();