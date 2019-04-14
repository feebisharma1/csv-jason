"use strict";
/**
 * This file handles configuration (command line args and config file loading) for Singer taps (see the [spec](https://github.com/singer-io/getting-started/blob/master/SPEC.md))
 */ /** hack for https://github.com/TypeStrong/typedoc/issues/603 */
Object.defineProperty(exports, "__esModule", { value: true });
// fs-extra is a promise-enabled superset of the standard fs package
const fse = require("fs-extra");
/** return an object containing the contents of config, state and catalog files */
function loadConfig() {
    var args = process.argv.slice(2); // remove unneeded boilerplate args
    if (args[0] != '--config') {
        console.error('arguments: --config CONFIG [--state STATE] [--properties CATALOG]');
        return new Promise(function (resolve, reject) {
            reject("missing required '--config' argument");
        });
    }
    else {
        return fse.readFile(args[1]).then(function (buffer) {
            let config = JSON.parse(buffer.toString());
            // if (config instanceof configType) {
            // }
            return { config: config };
        });
    }
}
exports.loadConfig = loadConfig;
//# sourceMappingURL=tap-load-config.js.map