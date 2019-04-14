"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sbupload_1 = require("./sbupload");
const parse = require('csv-parse');
const fse = require("fs-extra");
//import { outputJSON } from "fs-extra";
const csv = require('csvtojson');
//import * as fse from 'fs-extra'
let results = [];
//const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
fse.createReadStream('./testdata/csv/testA.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results);
    let x = [];
    for (let result of results) {
        x.push(JSON.parse(result.toString()));
    }
    console.log(JSON.stringify(x));
    sbupload_1.sbupload(x);
});
function parseCSV(item) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            csv().fromStringto(item.toString()).then((results) => {
                console.log(results);
                resolve(results);
            }).catch((err) => {
                resolve(err);
            });
        });
    });
}
exports.parseCSV = parseCSV;
//# sourceMappingURL=parse-csv.js.map