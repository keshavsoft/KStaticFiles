const fs = require('fs-extra')
var path = require('path');
const os = require('os');

const posthtml = require('posthtml')
const include = require('posthtml-include')

let LocalFolderPath = "src/Projects";
let LocalDestinationPath = "public/Projects";
//let LocalDestinationPath = "C:\\KeshavSoft\\nodejs\\multi\\2022\\oct\\8\\KJson\\public\\JSONApi\\Html"

var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

let CommonOsName = os.platform();

switch (CommonOsName) {
    case "win32":
console.log("sssssssss");
        break;

    default:
        break;
}

// walk(LocalFolderPath, function (err, results) {
//     if (err) throw err;

//     results.forEach(element => {
//         const html = fs.readFileSync(element);

//         posthtml([include({ encoding: 'utf8' })])
//             .process(html)
//             .then((result) => {
//                 if (fs.existsSync(element.replace(LocalFolderPath, LocalDestinationPath)) === false) {
//                     fs.createFileSync(element.replace(LocalFolderPath, LocalDestinationPath));
//                 };

//                 fs.writeFileSync(element.replace(LocalFolderPath, LocalDestinationPath), result.html);
//             });
//     });
// });

