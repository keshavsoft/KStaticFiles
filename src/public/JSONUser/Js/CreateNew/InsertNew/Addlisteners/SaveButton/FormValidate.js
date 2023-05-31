let StartFunc = () => {
    if (jFLocalPkValidate() === false) return false;
    if (jFLocalUserNameValidate() === false) return false;

    return true;
};

let jFLocalPkValidate = () => {
    let jVarLocalpk = document.getElementById("pk");

    if (jVarLocalpk.value === "") {
        jVarLocalpk.classList.add("is-invalid");
        jVarLocalpk.focus();

        return false;
    } else {
        jVarLocalpk.classList.add("is-valid");
    };

    return true;
};

let jFLocalUserNameValidate = () => {
    let jVarLocalpk = document.getElementById("UserName");
    console.log("jVarLocalpk : ", jVarLocalpk);
    if (jVarLocalpk.value === "") {
        jVarLocalpk.classList.add("is-invalid");
        jVarLocalpk.focus();

        return false;
    } else {
        jVarLocalpk.classList.add("is-valid");
    };

    return true;
};

export { StartFunc };
