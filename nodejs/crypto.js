const crypto = require('crypto')

const secret = 'testing';
const hash = crypto.createHmac('sha256', secret)
                   .update('Pruebas con crypto - nodejs')
                   .digest('hex');

console.log(hash);