import { ReturnRowPK } from "../../../urlSearchParams.js";

let PreparePostData = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarLocalQrCode = document.getElementById("QrCode");
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    let jVarLocalRowPK = ReturnRowPK().RowPK;

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQrCode === null)) {
        let jVarLocalQrCodeArray = jVarLocalQrCode.value.split("/");
        let jVarLocalQrCodeArrayFirstValue = jVarLocalQrCodeArray[0];

        let localpk = parseInt((jVarLocalQrCodeArrayFirstValue).substring(2));

        jVarLocalReturnData.pk = localpk;
    };

    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.Barcode = jVarLocalQrCode.value;
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.DisPercentage = parseInt(jVarLocalDisPersantage.value);
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.DisRate = parseInt(jVarLocalDisRate.value);
    };

    if (!(jVarLocalGrossAmout === null)) {
        jVarLocalReturnData.GrossAmout = parseInt(jVarLocalGrossAmout.value);
    };


    jVarLocalReturnData.BillPk = jVarLocalRowPK;

    return jVarLocalReturnData;
};

let StartFunc1 = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = ReturnRowPK().RowPK;
        //  jVarLocalRowPK = 2;

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: "BillsQrCode",
            JsonPk: jVarLocalRowPK,
            ScreenName: "Create",
            SubTableKey: "InvGrid"
        };

        inFetchPostData.DataToInsert = PreparePostData();
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking/Insert`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();
        LocalReturnObject.KTF = data.KTF;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};
let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: "BillsQrCode",
            ScreenName: "Create"
        };

        inFetchPostData.inPostData = PreparePostData();
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/InsertWithPk`;

        // let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking/Insert`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        return await data;
    } catch (error) {
        console.log("error:", error);
    }
};


export { StartFunc };