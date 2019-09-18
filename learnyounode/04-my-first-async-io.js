const fs = require('fs')

const fName = process.argv[2]
const file = fs.readFile(fName, 'utf8', function (err, data) {
    if (err) return
    const newLines = data.split('\n').length - 1
    console.log(newLines)
})
