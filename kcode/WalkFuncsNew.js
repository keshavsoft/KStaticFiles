const fs = require('fs-extra')
var path = require('path');

const posthtml = require('posthtml');
const include = require('posthtml-include');

var walk = function (dir, inFolderPath, inDestinationPath, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, function (err, inFolderPath, inDestinationPath, res) {
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

let CallBackFunc = (err, inFolderPath, inDestinationPath, results) => {
    if (err) throw err;

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LoopInsidePath = path.parse(element);

        if (LoopInsidePath.ext === ".html") {
            posthtml([include({ encoding: 'utf8' })])
                .process(html)
                .then((result) => {
                    if (fs.existsSync(element.replace(inFolderPath, inDestinationPath)) === false) {
                        fs.createFileSync(element.replace(inFolderPath, inDestinationPath));
                    };

                    fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), result.html);
                });
        } else {
            console.log("vLoopInsidePath : ", element);
            fs.copySync(element, element.replace(inFolderPath, inDestinationPath));
        };
    });
};

module.exports = { walk, CallBackFunc };