
import * as fse from 'fs-extra'

const xlsxj = require("xlsx-to-json");

xlsxj({
    input: "/Users/feebisharma1/Desktop/Hackathon/tap-ts-starter/src/sbcot/test.xlsx",
    output: "../src/sbcot/outputS.json"
},function(err:any, result:any) {
    if(err) {
        console.error(err);
    }else {
        console.log(result);
    
}
});
 console.log(JSON.stringify(xlsxj));
