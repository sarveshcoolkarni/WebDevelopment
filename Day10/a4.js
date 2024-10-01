const http = require('http');
const sumdigit = require('./sum');
const PORT = 2000;
const server = http.createServer((request, response)=> {
    var z = sumdigit.sum(10, 20);
    response.write(`Sum of digit = ${z}`);
    response.end();
});
server.listen(PORT, ()=> {
    console.log(`Server is listening to: ${PORT}`);
});