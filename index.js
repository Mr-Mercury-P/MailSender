const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mailRoutes = require('./routes/mailRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/mail', mailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
