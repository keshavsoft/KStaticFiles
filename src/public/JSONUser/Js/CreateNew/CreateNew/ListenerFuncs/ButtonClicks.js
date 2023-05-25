let StartFunc = ({ inSubRoute }) => {
    let jVarLocalSaveButtonId = document.getElementById("SaveButtonId");

    jVarLocalSaveButtonId.addEventListener("click", async () => {
        await LocalButtonClickFunc({ inSubRoute });
    });
};

let LocalButtonClickFunc = async ({ inSubRoute }) => {
    var form = document.getElementById("kform1");
    let jVarLocalFetchPostData = serializeObject(form);

    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = `/${inSubRoute}/Users/Api/Save`;

    if (jVarLocalFetchPostData.UserName === "") {
        window.alert("Please Enter UserName");

    } else if (jVarLocalFetchPostData.PassWord === "") {
        window.alert("Please Enter PassWord");
    };

    if (jVarLocalFetchPostData.UserName === "" === false) {
        if (jVarLocalFetchPostData.PassWord === "" === false) {
            
            await fetch(jVarLocalUrl, jVarLocalSettings).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            }).then((FetchData) => {
                if (FetchData.KTF) {
                    window.location = "../BoilerPlate/FoldersOnly.html";
                }
            }).catch((e) => { })

        };


    };
    // let data = await response.json();

    // if (data.KTF) {
    //     //jVarLocalApiFuncs.ShowData();
    //     // window.location = "Show.html";
    //     // window.location = "../BoilerPlate/FoldersOnly.html";
    // };
};


let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};


export { StartFunc }
