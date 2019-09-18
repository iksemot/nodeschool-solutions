const fs = require('fs')

const directory = process.argv[2]
const extension = process.argv[3]

const pattern = `.+\.${extension}$`

fs.readdir(directory, (err, files) => {
    if (err) return

    files.forEach(file => {
        if (new RegExp(pattern).test(file)) console.log(file)
    })
})