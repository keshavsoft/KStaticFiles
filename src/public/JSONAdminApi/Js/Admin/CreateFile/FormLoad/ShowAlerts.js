
const StartFunc = () => {
    let jVarLocalForConfig = getUrlQueryParams({ inGetKey: "ConfigFolderCreated" });
    
    if (jVarLocalForConfig === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#ConfigFolderInsertSuccessId');
        alert.close();
    };

    let jVarLocalForData = getUrlQueryParams({ inGetKey: "DataFolderCreated" });
    
    if (jVarLocalForData === null) {
        const alert = bootstrap.Alert.getOrCreateInstance('#DataFolderInsertSuccessId');
        alert.close();
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
