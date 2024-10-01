const fs = require('fs');
const http = require('http');
const PORT = 2001;
const server = http.createServer((request, response)=> {
    if (request.method === 'GET') {
        // Serve the HTML form
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`
          <html lang=en>
            <body>
              <form action="/" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <input type="submit" value="Submit">
              </form>
            </body>
          </html>
        `);
        response.end();
      } else if (request.method === 'POST') {
        // Handle form submission
        let str = '';
        request.on('data', (chunk) => {
          str += chunk.toString();
        });
        request.on('end', () => {
          const formData = new URLSearchParams(str);
          const name = formData.get('name');
          const email = formData.get('email');
    
          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write(`Name: ${name}\n`);
          response.write(`Email: ${email}\n`);
          fs.writeFile('myfile.txt', `Name is: ${name}\nEmail is: ${email}`, (error, data)=> {
            if(error){
                console.log(error);
            }
            else {
                console.log('Data saved successfully');
            }
          });
          response.end();
        });
      }
});
server.listen(PORT, () => {
    console.log(`Server Listening to ${PORT}`);
})