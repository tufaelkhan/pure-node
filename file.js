const fs = require('fs')

// reading a file text
const readText =  fs.readFileSync('./texts/read.txt', 'utf-8')

const writeText = fs.writeFileSync('./texts/write.txt', readText + 'tufael khan written text')
console.log(writeText);
