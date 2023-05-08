import { StartFunc as StartFuncAddListeners } from "./AddListeners.js";
import { StartFunc as StartFuncCheckToken } from "./CheckToken.js";

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    StartFuncAddListeners({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });

    StartFuncCheckToken({
        inUserKey,
        inFirmKey,
        inTokenName,
        inModalId
    });
};

export { StartFunc }
