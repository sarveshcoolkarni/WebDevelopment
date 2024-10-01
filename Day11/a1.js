const fs = require('fs');
fs.readFile("mytext.txt", (error, data) => {
    if(error) {
        console.log(error);
    }
    const details =  data.toString();
    console.log(details);

})