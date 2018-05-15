const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('PORT', 3000);

const PORT = process.env.PORT || app.get('PORT');
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));