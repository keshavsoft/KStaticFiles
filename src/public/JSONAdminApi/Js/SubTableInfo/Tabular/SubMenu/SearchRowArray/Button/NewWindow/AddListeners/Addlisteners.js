let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalKTF = jVarLocalColsestTr.querySelector('[name="KTF"]');
    let jVarLocalSvgPlus = jVarLocalColsestTr.querySelector('[name="SvgPlus"]');
    let jVarLocalColClass = jVarLocalColsestTr.querySelector('[name="ColClass"]');
    let jVarLocalSvgPlusLarge = jVarLocalColsestTr.querySelector('[name="SvgPlusLarge"]');
    let jVarLocalNewWindow = jVarLocalColsestTr.querySelector('[name="NewWindow"]');
    let jVarLocalTable = jVarLocalColsestTr.querySelector('[name="Table"]');

    let jVarLocalKTFValue = jVarLocalKTF.checked;
    let jVarLocalSvgPlusValue = jVarLocalSvgPlus.checked;
    let jVarLocalColClassValue = jVarLocalColClass.value;
    let jVarLocalSvgPlusLargeValue = jVarLocalSvgPlusLarge.checked;
    let jVarLocalNewWindowValue = jVarLocalNewWindow.checked;
    let jVarLocalTableValue = jVarLocalTable.checked;


    let BodyAsJson = {
        KTF: jVarLocalKTFValue,
        SvgPlus: jVarLocalSvgPlusValue,
        ColClass: jVarLocalColClassValue,
        SvgPlusLarge: jVarLocalSvgPlusLargeValue,
        NewWindow: jVarLocalNewWindowValue,
        Table: jVarLocalTableValue


    }


    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/SearchRowArray/Button/NewWindow";

    let response = await fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            BodyAsJson
        })
    });

    switch (response.status) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`;
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };

    console.log("response : ", response.status);
};

export { jFUpdateFunc };