"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const parser = require("./parse-mime");
var args = process.argv.slice(2); // remove unneeded boilerplate args
fse.readFile(args[0])
    .then(function (buffer) {
    return parser.parseItem(buffer);
})
    .then(function (value) {
    console.log(JSON.stringify(value));
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=debug-parse-mime.js.map