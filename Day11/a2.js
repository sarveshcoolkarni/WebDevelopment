//write the file
const fs = require('fs');
fs.writeFile('mytext2', "Hello Sarthak", (error)=> {
    if(error) {
        console.log(error);
    } else {
        fs.readFile("mytext2", (error, data)=> {
            if(error) {
                console.log(error);
            }
            else {
                const details = data.toString();
                console.log(details);
            }
        })
    }
})