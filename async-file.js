const { error } = require('console');
const fs = require('fs')

// reading text asynchronously
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if(err){
        throw Error('Error reading text')
    }
    console.log(data);

    // writing text asynchronously
    fs.writeFile('./texts/read2.txt', data, 'utf-8', (error) => {
        if(error){
            throw Error('write error show')
        }
       
    })
})
console.log('testing asynchronously');