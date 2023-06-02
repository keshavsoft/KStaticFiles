import { StartFunc as StartFuncButtoClickFunc } from "./ButtonClickFunc.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./KeyPressFuncs.js";

let StartFunc = ({ inSubRoute }) => {
    StartFuncButtoClickFunc({
        inSubRoute
    });
    StartFuncKeyPressFuncs();
};

export { StartFunc };