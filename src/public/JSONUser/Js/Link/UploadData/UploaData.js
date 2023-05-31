import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
// import { StartFunc as StartAddlisteners } from "./Addlisteners/StartFuncs.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

let StartFunc = async () => {
    StartFuncAdminData().then(PromiseData => {
        if (PromiseData) {
            StartFuncFormLoad();

            StartFuncShowData().then();
        };
    });
};

StartFunc().then();

