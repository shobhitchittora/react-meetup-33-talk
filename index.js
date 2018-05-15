const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('PORT', 3000);

app.listen(app.get('PORT'), () => console.log(`Server running on port ${app.get('PORT')}!`));