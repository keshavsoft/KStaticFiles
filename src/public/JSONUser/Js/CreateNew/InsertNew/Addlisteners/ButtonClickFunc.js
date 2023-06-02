import { ReturnUserPK } from "../urlSearchParams.js";
import { StartFunc as StartFuncSaveButton } from "./SaveButton/StartFunc.js";

let StartFunc = ({ inSubRoute }) => {
    let LocalFromUrlSearchParams = ReturnUserPK();
    let LocalDompk = document.getElementById("pk");

    if ((LocalFromUrlSearchParams.UserPK == null) === false) { //Executes if variable is null OR undefined
        LocalDompk.value = LocalFromUrlSearchParams.UserPK;
        let LocalFromDomUserName = document.getElementById("UserName");
        LocalFromDomUserName.focus();
    };

    StartFuncSaveButton({ inSubRoute });
    // jFLocalKeyPress();
};

const jFLocalKeyPress = (params) => {
    let LocalDompk = document.getElementById("pk");

    LocalDompk.addEventListener("keypress", (event) => {
        if (event.key === "Enter") { // key code of the keybord key
            event.preventDefault();
            let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");

            jVarLocalSaveButtonid.click();
            // your code to Run
        }
    });
};

export { StartFunc };
