"use strict";
/**
 * This module is the entry point for local execution as a Singer tap (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/** this is a dummy single-line comment needed for documentation build; a hack for https://github.com/TypeStrong/typedoc/issues/603 */
/** DummyClass is used in testing (see ```npm test``` in package.json) */
class DummyClass {
}
exports.default = DummyClass;
const configLoader = require("./tap-load-config");
const parseMime = require("./parse-mime");
var parse_mime_1 = require("./parse-mime");
exports.parseItem = parse_mime_1.parseItem;
const scanDir = require("./scan-dir");
// show developers that code has started to run
console.log('working!');
/** mainFunction is the main code to be run.
 *
 * This code is in its own function because it uses "await" to call async functions, and
 * the await keyword can only be used in an async function.
 */
function mainFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var configObjs = yield configLoader.loadConfig();
            return scanDir.scanDir(configObjs, parseMime.parseItem);
        }
        catch (_a) {
            let error = (error) => {
                // Handle errors
                console.error('Error: ', error);
                return error;
            };
        }
    });
}
// call mainFunction
mainFunction();
//# sourceMappingURL=tap-main.js.map