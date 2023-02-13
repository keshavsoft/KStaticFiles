let jFCloneFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};
let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalreportName = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalpk = jVarLocalCurrentTarget.dataset.pk;


    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider";

    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalreportName,
            pk: jVarLocalpk
        })
    };

    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);
    // console.log("response.status", response.status);

    // const ResponseData = await response.json();


    switch (response.status) {
        case 200:
            // Swal.fire('Dublicated')
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalpk}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { jFCloneFunc };