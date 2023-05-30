import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
import { StartFunc as StartAddlisteners } from "./Addlisteners/StartFuncs.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let StartFunc = async () => {
    let LocalFromAdmin = await StartFuncAdminData();

    if (LocalFromAdmin) {
        StartFuncShowData().then((params) => {
            StartAddlisteners();
        });
    };
};

StartFunc().then();

