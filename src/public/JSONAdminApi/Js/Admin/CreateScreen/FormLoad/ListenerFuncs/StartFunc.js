import { StartFunc as StartFuncCreateItemButton } from "./CreateItemButton/StartFunc.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    StartFuncCreateItemButton({ inEvent, inProjectName });
};

export { StartFunc };