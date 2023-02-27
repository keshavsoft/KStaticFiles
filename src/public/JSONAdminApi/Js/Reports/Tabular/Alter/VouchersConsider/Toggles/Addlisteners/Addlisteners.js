let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalUpdateClickFunc)
    };

};
let jFLocalUpdateClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");

    let jVarLocalItemNameConsider = jVarLocalColsestTr.querySelector('[name="ItemNameConsider"]');
    let jVarLocalActive = jVarLocalColsestTr.querySelector('[name="Active"]');
    let jVarLocalFromFolder = jVarLocalColsestTr.querySelector('[name="FromFolder"]');


   
    let jVarLocalItemNameConsiderValue = jVarLocalItemNameConsider.value;
    let jVarLocalActiveValue = jVarLocalActive.checked;
    let jVarLocalFromFolderValue = jVarLocalFromFolder.value;

    let BodyAsJson = {
       
        FileName: jVarLocalItemNameConsiderValue,
        Active: jVarLocalActiveValue,
        ItemNameConsider: jVarLocalFromFolderValue

    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/Toggles";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ItemName: jVarLocalItemName,
            voucher: jVarLocalvoucherName,
            BodyAsJson
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data..&#128531')
            break;
        default:
        // code block
    };
};

export { jFUpdateFunc };