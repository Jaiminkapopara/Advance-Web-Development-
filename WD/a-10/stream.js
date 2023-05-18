const fs = require('fs');
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');
readable.on('data', (chunk) => {
    writable.write(chunk);
});
readable.on('end', () => {
    writable.end();
});
writable.on('finish', () => {
    console.log('Data written to output.txt');
});
