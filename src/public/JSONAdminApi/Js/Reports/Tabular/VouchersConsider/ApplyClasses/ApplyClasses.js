let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    console.log("jVarLocalQueryParams--", jVarLocalQueryParams);
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
        Swal.fire('Dublicated Sucessfully')

    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
};


let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};



let LocalForApplyClasses = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    if ("ReportsObject" in indataFromApi) {
        if (Object.values(indataFromApi.ReportsObject).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.ReportsObject)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";
        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalReportName = inQueryParamsAsObject.inReportName;
    let jVarLocalFileName = inQueryParamsAsObject.inRowPK;
    if ("ReportsObject" in indataFromApi) {
        if (jVarLocalReportName in indataFromApi.ReportsObject) {
            indataFromApi.ReportsObject[jVarLocalReportName].TabPageClass = " show active";
            indataFromApi.ReportsObject[jVarLocalReportName].MenuClass = " active";
        };
    };
};

export { StartFunc }