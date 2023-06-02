let StartFunc = () => {
    jFLocalpkKeyPress();
};

const jFLocalpkKeyPress = (params) => {
    let LocalDompk = document.getElementById("pk");

    LocalDompk.addEventListener("keypress", (event) => {
        if (event.key === "Enter") { // key code of the keybord key
            event.preventDefault();
            let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");

            jVarLocalSaveButtonid.click();
            // your code to Run
        }
    });
};

export { StartFunc };
