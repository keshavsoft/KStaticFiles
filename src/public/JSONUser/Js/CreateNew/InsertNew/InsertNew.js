import { StartFunc as StartFuncButtoClickFunc } from "./Addlistoners/ButtoClickFunc.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let jVarGlobalAdminSubRoute = "JSONUser";


let StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();
    if (jVarLocalFromAdmin) {
        StartFuncButtoClickFunc({
            inSubRoute: jVarGlobalAdminSubRoute

        });
    };

};
StartFunc();