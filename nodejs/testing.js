const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(3000, () => console.log('Server ready'));

// Terminar una ejecucion
console.log('Testing');
// process.exit(1);
console.log('Testing 2');