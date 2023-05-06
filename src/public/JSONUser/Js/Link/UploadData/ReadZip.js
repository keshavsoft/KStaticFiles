var $result = document.getElementById("result");

let jFLocalToTable = (zipEntry, inLoopIndex) => {
    let jVarLocalLi = document.createElement("tr");
    let jVarLocalTd1 = document.createElement("td");
    jVarLocalTd1.innerHTML = inLoopIndex;
    jVarLocalLi.appendChild(jVarLocalTd1);

    let jVarLocalTd = document.createElement("td");
    jVarLocalTd.innerHTML = zipEntry.name;
    jVarLocalLi.appendChild(jVarLocalTd);

    let jVarLocalTdDate = document.createElement("td");
    jVarLocalTdDate.innerHTML = zipEntry.date;
    jVarLocalLi.appendChild(jVarLocalTdDate);

    let jVarLocalTdDir = document.createElement("td");
    jVarLocalTdDir.innerHTML = zipEntry.dir;
    jVarLocalLi.appendChild(jVarLocalTdDir);

    if (zipEntry.dir === false) {
        let jVarLocalTdSize = document.createElement("td");
        jVarLocalTdSize.classList.add("text-end");

        jVarLocalTdSize.innerHTML = zipEntry._data.uncompressedSize;
        jVarLocalLi.appendChild(jVarLocalTdSize);
    };

    $result.appendChild(jVarLocalLi);
    inLoopIndex += 1;
};

const jFLocalhandleFile = (f) => {
    var $title = document.getElementById("FileNameId");
    $title.innerHTML = f.name;

    JSZip.loadAsync(f)
        .then(jFLocalloadAsyncThen, jFLocalloadAsyncThen2ndFunc);
};

const jFLocalloadAsyncThen = (zip) => {
    var $title = document.getElementById("FileNameId");
    let jVarLoopIndex = 0;
    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("small");
    // jVarLocalSpan.innerHTML = " (loaded in " + (dateAfter - dateBefore) + "ms)";
    $title.appendChild(jVarLocalSpan);

    let jVarLocalHtmld = "KTableBodyId";
    let jVarLocalKTableBodyId = document.getElementById(jVarLocalHtmld);
    let jVarLocalTableRows = jVarLocalKTableBodyId.querySelector("tr.table-primary");
    let jVarLocalDataset = jVarLocalTableRows.dataset;
    let jVarLocalPkNeeded = jVarLocalDataset.pk;

    console.log("aaaaaaaaaa : ", jVarLocalPkNeeded, jVarLocalTableRows, Object.keys(zip.files)[0]);

    if (Object.keys(zip.files).length > 0) {
        let jVarLocalZipKey = Object.keys(zip.files)[0].split("/")[0];
        console.log("jVarLocalZipKey : ", jVarLocalZipKey, jVarLocalPkNeeded);

        if (jVarLocalZipKey === jVarLocalPkNeeded === false) {

            return;
        };

        zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
            jFLocalToTable(zipEntry, jVarLoopIndex);
            jVarLoopIndex += 1;
        });
    };

};

const jFLocalloadAsyncThen2ndFunc = (e) => {
    let jVarLocalLi = document.createElement("tr");
    let jVarLocalTd1 = document.createElement("td");
    jVarLocalTd1.innerHTML = "Error reading " + f.name + ": " + e.message;
    jVarLocalLi.appendChild(jVarLocalTd1);

    $result.appendChild(jVarLocalLi);
};

const jFStart = () => {
    let jFLocalHtmlId = "file";
    let jFLoalHtmlFile = document.getElementById("file");
    let jVarLocalCloneClassName = document.getElementsByClassName("SelectFileClass");

    for (let i = 0; i < jVarLocalCloneClassName.length; i++) {
        jVarLocalCloneClassName[i].addEventListener("change", jFSelectChange)
    };

    if (jFLoalHtmlFile === null === false) {
        jFLoalHtmlFile.addEventListener("change", (evt) => {
            // remove content
            $result.innerHTML = "";
            // be sure to show the results
            document.getElementById("result_block").classList.remove("hidden");
            document.getElementById("result_block").classList.add("show");

            var files = evt.target.files;
            for (var i = 0; i < files.length; i++) {
                jFLocalhandleFile(files[i]);
            }
        });
    };
};

const jFSelectChange = (evt) => {
    let jVarLocalEvent = evt;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("Tr");
    // let jVarLocalFileSelect = jVarLocalClosestTr.querySelector(".SelectFileClass");
    jVarLocalClosestTr.classList.add("table-primary");
    // remove content
    $result.innerHTML = "";
    // be sure to show the results
    document.getElementById("result_block").classList.remove("hidden");
    document.getElementById("result_block").classList.add("show");

    var files = evt.target.files;

    if (files.length === 1) {
        //allow only file to upload............
        jFLocalhandleFile(files[0]);
    };
};

export { jFSelectChange };