const StartFunc = ({ inProjectName, inSubRoute }) => {
    let jVarLocalHtmlId = "SignInButtonId";
    let jVarLocalSignUpButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalSignUpButtonId.addEventListener("click", async () => {
        await jFLocalButtonClick({ inProjectName, inSubRoute });
    });
};

const jFLocalButtonClick = async ({ inProjectName }) => {
    let jVarLocalUserName = document.getElementById("UserNameId").value;
    let jVarLocalPassWord = document.getElementById("PassWordId").value;

    let jVarLocalLoginUrl = `/${inProjectName}/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie`;

    let responseFromTree = await fetch(jVarLocalLoginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName: jVarLocalUserName, inPassWord: jVarLocalPassWord })
    });
    let jVarLocalDataJson = await responseFromTree.json();

    if (jVarLocalDataJson.KTF) {
        jFLocalStorageFill({ inUserName: jVarLocalUserName, inFirmDetails: jVarLocalDataJson });

        if ("RedirectPage" in jVarLocalDataJson) {
            window.location = jVarLocalDataJson.RedirectPage;
        } else {
            window.location = "/JSONApi/Html/UserData/Menu/AsCards/Files.html";
            //window.location = "../Tree.html";
            //window.location = "../Entry.html";
        };
    } else {
        document.getElementById("ShowErrorAlert").classList.remove("invisible");
        document.getElementById("PassWordId").focus();
    };
};

let jFLocalStorageFill = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};

export { StartFunc };