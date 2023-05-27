const StartFunc = ({ inProjectName }) => {
    let jVarLocalHtmlId = "SignUpButtonId";
    let jVarLocalSignUpButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalSignUpButtonId.addEventListener("click", () => {
        jFLocalButtonClick({ inProjectName });
    });
};

const jFLocalButtonClick = ({ inProjectName }) => {
    let jVarLocalShowProcessId = document.getElementById("ShowProcessId");
    jVarLocalShowProcessId.classList.remove("d-none");
    var form = document.getElementById('KForm1');
    var data = serializeObject(form);

    //let jVarFetchUrl = `/${jVarLocalProjectName}/Admin/Api/Create`;
    let jVarFetchUrl = `/${inProjectName}/Admin/Api/Create/WithOutPassword`;

    fetch(jVarFetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        switch (response.headers.get('content-type')) {
            case "text/html":
                return response.text();
                break;

            default:
                return response.json();
                break;
        };
    }).then(FetchData => {
        jVarLocalShowProcessId.classList.add("d-none");

        jFLocalPostCreateUser({ inFetchData: FetchData, inSubRoute });
    });
};

let jFLocalPostCreateUser = ({ inFetchData }) => {
    let jVarLocalErrorAlertDiv = document.getElementById("ErrorAlertDiv");

    switch (typeof inFetchData) {
        case "string":
            jVarLocalErrorAlertDiv.classList.remove("alert-danger");
            jVarLocalErrorAlertDiv.classList.add("alert-secondary");

            jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData;

            jVarLocalErrorAlertDiv.style.display = "";

            break;
        default:
            if (inFetchData.KTF) {
                if ("KSClientError" in inFetchData) {
                    jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData.KError;

                    jVarLocalErrorAlertDiv.style.display = "";
                } else {
                    //      window.location = `/${inSubRoute}/Html/UserData/FromFolders.html`;
                };
            } else {
                jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData.KReason;

                jVarLocalErrorAlertDiv.style.display = "";
                jVarLocalUserName.focus();
            };
            break;
    };
};


let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};


export { StartFunc };