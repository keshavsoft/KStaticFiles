let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalCloneName = jVarLocalColsestTr.querySelector('[name="CloneName"]');

    let jVarLocalCloneNameValue = jVarLocalCloneName.value;
    console.log("kkkkkkkkkkk",jVarLocalFolderName,jVarLocalCloneNameValue);


    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Duplicate/DuplicateFolder";
    let jFetchBody = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            inToFolderName: jVarLocalCloneNameValue
        })
    }
    let response = await fetch(jFetchUrl, jFetchBody);

    switch (response.status) {
        case 200:

            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inToFolderName=${jVarLocalCloneNameValue}`
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