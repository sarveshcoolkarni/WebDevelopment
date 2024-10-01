const http = require('http');
const PORT = 2000;
const server = http.createServer((request, response)=> {
    response.write('Hello World');
    response.end();
});
server.listen(PORT, () => {
    console.log(`listining to ${PORT}`);
});