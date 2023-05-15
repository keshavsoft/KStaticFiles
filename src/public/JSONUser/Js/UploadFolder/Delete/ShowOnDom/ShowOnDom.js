import { jFStartFunc as jFStartFuncApplyClasses } from "./ApplyClasses.js";

let StartFunc = ({ JsonData }) => {
    let localJsonData = JsonData;

    if (localJsonData !== null) {
        jFStartFuncApplyClasses({ inDataFromApi: localJsonData });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KDomId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localJsonData);
    };

};

export { StartFunc };