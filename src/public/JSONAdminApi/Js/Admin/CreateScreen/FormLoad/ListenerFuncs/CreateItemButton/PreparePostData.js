let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalScreenName = jVarLocalColsestTr.querySelector('[name="ScreenName"]');
    let jVarLocalScreenNameValue = jVarLocalScreenName.value;

    let jVarLocalFromButtonData = jFLocalFromButton({ inCurrentTarget: jVarLocalCurrentTarget });

    return {
        ...jVarLocalFromButtonData,
        NewScreenName: jVarLocalScreenNameValue
    };
};

const jFLocalFromButton = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalFileName = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;

    return {
        FolderName: jVarLocalFolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalitemname
    };
};

export { StartFunc };