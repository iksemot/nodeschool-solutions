const fs = require('fs')

const fName = process.argv[2]
const file = fs.readFileSync(fName, 'utf8')
const newLines = file.split('\n').length - 1

console.log(newLines)