import { StartFunc as StartFuncurlSearchParams } from "./urlSearchParams.js";

const StartFunc = () => {
    let jVarLocalFromSearchParams = StartFuncurlSearchParams();

    if (jVarLocalFromSearchParams.FromInsertNew === false) {
        jFLocalFromInsertNewClose();
    } else {
        jFLocalFromInsertNewShow({ inDataPk: jVarLocalFromSearchParams.DataPk });
    };
};

let jFLocalFromInsertNewClose = () => {
    const bsAlert = new bootstrap.Alert('#AlertForFromInsertNewId');
    bsAlert.close();
};

let jFLocalFromInsertNewShow = ({ inDataPk }) => {
    let localinJsonPk = inDataPk;
    const jVarLocalHtmlId = document.getElementById("AlertForFromInsertNewId");
    let jVarLocalStrong = jVarLocalHtmlId.querySelector("strong");
    jVarLocalStrong.innerHTML = localinJsonPk;

};

export { StartFunc };