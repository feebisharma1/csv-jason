"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const xlsxj = require("xlsx-to-json");
fse.readFile('./src/gender/test.xlsx').then(data => {
    console.log(data);
});
xlsxj({
    input: './src/gender/test.xlsx',
    output: './src/gender/outputG.json',
}, function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});
//# sourceMappingURL=parse-xlsx.js.map