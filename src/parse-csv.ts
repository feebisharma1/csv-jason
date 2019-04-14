import { sbupload } from './sbupload';
const parse = require('csv-parse');

import * as fse from 'fs-extra'
import { resolve } from 'dns';
//import { outputJSON } from "fs-extra";

const csv = require('csvtojson');

//import * as fse from 'fs-extra'
let results: any = []
//const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'


fse.createReadStream('./testdata/csv/testA.csv')
    .pipe(csv())
    .on('data', (data: any) => results.push(data))
    .on('end', () => {
        console.log(results)
        let x = [];
        for (let result of results) {
            x.push(JSON.parse(result.toString()))
        }
        console.log(JSON.stringify(x));
        sbupload(x)
    });


export async function parseCSV(item: Buffer) {
    return new Promise((resolve, reject) => {
        csv().fromStringto(item.toString()).then((results: any) => {
            console.log(results);
            resolve(results)
        }).catch((err: any) => {
            resolve(err)
        })
    })
}