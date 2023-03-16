let StartFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("UploadButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.report;

    let jFetchUrl = "/JSONAdminApi/AdminApi/Reports/ledgerAutoJsonFile/Utilities/import";
    let jVarLocalRequestHeader = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ToName: jVarLocalvoucherName,
            ReportConficObject: jVarLocalReportItemValue,
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = `?inReportName=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;
            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { StartFunc };