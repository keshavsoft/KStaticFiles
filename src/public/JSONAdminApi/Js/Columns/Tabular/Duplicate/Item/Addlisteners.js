let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalCloneName = jVarLocalColsestTr.querySelector('[name="CloneName"]');

    let jVarLocalCloneNameValue = jVarLocalCloneName.value;


    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Duplicate/DuplicateItem";
    let jFetchBody = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            inToItemName: jVarLocalCloneNameValue
        })
    }
    let response = await fetch(jFetchUrl, jFetchBody);
    console.log("response--------------",response);

    switch (response.status) {
        case 200:

            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inDuplicateItem=${jVarLocalCloneNameValue}`
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