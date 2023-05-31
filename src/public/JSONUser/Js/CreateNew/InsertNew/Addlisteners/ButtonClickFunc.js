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
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    };

    return pairs;
};

let jFLocalSave = async ({ inSubRoute }) => {
    var form = document.getElementById("kform1");

    let jVarLocalFetchPostData = serializeObject(form);

    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = `/${inSubRoute}/Users/Api/Save/WithDataPk`;
    let response = await fetch(jVarLocalUrl, jVarLocalSettings);
    let data = await response.json();

    if (data.KTF) {
        //window.location = "../Customers/Show.html";
        window.location = "../Link/UploadData.html";

        //http://localhost:4119/JSONUser/Html/Link/UploadData.html

    } else {
        Swal.fire(
            data.KReason
        )
    };
    return data;
};

export { StartFunc };
