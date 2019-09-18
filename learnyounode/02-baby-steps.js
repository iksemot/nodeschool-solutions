const args = process.argv.slice(2)

const sum = args.reduce((total, val) => (total + Number(val)), 0)

console.log(sum)