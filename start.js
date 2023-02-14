const os = require('os');

let CommonForWin32 = require("./kcode/ForWin32");

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
        CommonForWin32.StartFunc();
        break;

    default:
        break;
};