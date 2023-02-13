let jFCloneFunc = () => {
    let jVarLocalCloneClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("click", jFLocalClickFunc)
    };

};
let jFLocalClickFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalreportName = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalpk = jVarLocalCurrentTarget.dataset.pk;


    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider";

    let response = fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalreportName,
            pk: jVarLocalpk
        })
    });

    switch (response.status) {
        case 200:
            Swal.fire('Dublicated')

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { jFCloneFunc };