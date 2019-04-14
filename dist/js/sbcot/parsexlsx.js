"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xlsxj = require("xlsx-to-json");
xlsxj({
    input: "/Users/feebisharma1/Desktop/Hackathon/tap-ts-starter/src/sbcot/test.xlsx",
    output: "../src/sbcot/outputS.json"
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(result);
    }
});
console.log(JSON.stringify(xlsxj));
//# sourceMappingURL=parsexlsx.js.map