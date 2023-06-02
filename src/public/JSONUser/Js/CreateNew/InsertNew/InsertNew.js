import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import FromConfigKeys from '../../ConfigKeys.json' assert { type: 'json' };

let jVarGlobalAdminSubRoute = FromConfigKeys.AdminSubRoute;

let StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncAddlisteners({
            inSubRoute: jVarGlobalAdminSubRoute
        });
    };
};

StartFunc();