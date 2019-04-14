"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** parseSting is a xml to json parser from npm 'xml2js' module (https://www.npmjs.com/package/xml2js)
 *
 */
const tapTypes = require("./tap-types");
var parseString = require('xml2js').parseString;
function parseItem(xmlfile) {
    return new Promise(function (resolve, reject) {
        parseString(xmlfile, function (err, result) {
            //console.dir(result);
            if (result != null) {
                let rec = new tapTypes.streamRecord();
                rec.stream = 'xml';
                rec.time_extracted = new Date();
                rec.record = result;
                resolve(rec);
            }
            else {
                reject(Error('It broke'));
            }
        });
    });
} //end function parseItem
exports.parseItem = parseItem;
//# sourceMappingURL=parse-xml.js.map