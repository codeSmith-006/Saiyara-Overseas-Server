import fs from 'fs';

// getting the key
const key = fs.readFileSync("./firebase-admin.json", 'utf-8')
// converting into base64
const encodedKey = Buffer.from(key).toString('base64');
console.log("Key: ", encodedKey) 