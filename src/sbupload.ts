const fs = require('fs-extra')

export function sbupload(data:any){fs.writeJson('./testdata/csv/outputA.json', data, (err:any) =>{
    if (err) return console.error(err)
    console.log('success!')
})}