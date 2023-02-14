let LocalFolderPath = "src\\Projects";
let LocalDestinationPath = "public\\Projects";

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

