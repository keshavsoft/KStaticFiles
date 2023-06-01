import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
import { StartFunc as StartFuncLoginFetch } from "./LoginFetch.js";

let StartFunc = () => {
    let jVarLocalFromCheck = StartFuncCheckLogin();

    if (jVarLocalFromCheck === false) {
        StartFuncLoginFetch();
    };

    return jVarLocalFromCheck;
};

// StartFunc().then();

export { StartFunc };
