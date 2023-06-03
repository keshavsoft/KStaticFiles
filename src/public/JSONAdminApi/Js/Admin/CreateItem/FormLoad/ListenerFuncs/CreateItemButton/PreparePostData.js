let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalItemNameValue = jVarLocalItemName.value;

    let jVarLocalFromButtonData = jFLocalFromButton({ inCurrentTarget: jVarLocalCurrentTarget });

    return {
        ...jVarLocalFromButtonData,
        NewItemName: jVarLocalItemNameValue
    };
};

const jFLocalFromButton = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalFileName = jVarLocalCurrentTarget.dataset.filename;

    return {
        FolderName: jVarLocalFolderName,
        FileName: jVarLocalFileName
    };
};

export { StartFunc };