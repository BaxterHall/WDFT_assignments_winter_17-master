/*Express Review
Nice job setting up the static folder for your journal! 
*/

const express = require('express');
const app = express();

//start Express on port 8080

app.use(express.static('public'));


app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');

})