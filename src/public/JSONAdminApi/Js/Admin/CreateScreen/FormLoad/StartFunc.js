import { StartFunc as StartFuncShowAlerts } from "./ShowAlerts.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";

const StartFunc = ({ inProjectName }) => {
    StartFuncShowAlerts();
    StartFuncAddlisteners({ inProjectName });
};

export { StartFunc };
