"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs-extra');
function sbupload(data) {
    fs.writeJson('./testdata/csv/outputA.json', data, (err) => {
        if (err)
            return console.error(err);
        console.log('success!');
    });
}
exports.sbupload = sbupload;
//# sourceMappingURL=sbupload.js.map