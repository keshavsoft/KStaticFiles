import { StartFunc as StartFuncLoginButtonClass } from "./LoginButton/ClickFunc.js";

let LocalButtonClickFunc = async ({ inEvent, inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    let jVarLocalEvent = inEvent;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalUserName = jVarLocalDataset.username;
    let jVarLocalPassword = jVarLocalDataset.password;

    let LocalFromFetch = await LocalCheckCredentials({
        inUserName: jVarLocalUserName,
        inPassWord: jVarLocalPassword
    });

    if (LocalFromFetch.KTF) {
        LocalInsertToLocalStorage({
            inUserName: jVarLocalUserName, inFirmDetails: LocalFromFetch,
            inUserLocalStorageKey, inFirmDetailsLocalStorageKey
        });

        if ("RedirectPage" in LocalFromFetch) {
            window.open(LocalFromFetch.RedirectPage, '_newtab');
            //window.location.href = LocalFromFetch.RedirectPage;
        };

        window.open("/JSONApi/Html/UserData/Menu/AsCards/Files.html", '_newtab');
    };
};

let LocalInsertToLocalStorage = ({ inUserName, inFirmDetails, inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    localStorage.setItem(inUserLocalStorageKey, inUserName);
    localStorage.setItem(inFirmDetailsLocalStorageKey, JSON.stringify(inFirmDetails));
};

let LocalCheckCredentials = async ({ inUserName, inPassWord }) => {
    let jVarLocalFetchUrl = "/JSONApi/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie";

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassWord })
    });

    let FetchData = await response.json();
    return await FetchData;
};

let StartFunc = ({ inUserLocalStorageKey, inFirmDetailsLocalStorageKey }) => {
    var userSelection = document.querySelectorAll('.LoginButtonClass');

    for (let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener("click", async () => {
            await StartFuncLoginButtonClass({ inEvent: event, inUserLocalStorageKey, inFirmDetailsLocalStorageKey });
        });
    };

    jFLocalTableSearchAddListener();
};

let jFLocalTableSearchAddListener = () => {
    var jVarLocalTableSearchId = document.getElementById('TableSearchId');

    jVarLocalTableSearchId.addEventListener("keyup", jFLocalTableSearch);
};

let jFLocalTableSearch = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalClosestCard = jVarLocalCurrentTarget.closest(".card");
    let jVarLocalTableBodyId = jVarLocalClosestCard.querySelector(".card-body table tbody");

    var filter, table, tr, td, i;
    filter = jVarLocalCurrentTarget.value;

    for (var i = 0, row; row = jVarLocalTableBodyId.rows[i]; i++) {
        jVarLocalTableBodyId.rows[i].classList.add("d-none");

        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.innerHTML.includes(filter)) {

                jVarLocalTableBodyId.rows[i].classList.remove("d-none");

                break;
            };
        }
    }
};

export { StartFunc }
