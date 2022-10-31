const express = require('express');
const app = express();
const product = require('./routes');

app.use(express.json({extended: false}));

// app.use('/api/product', product);
app.use('/', product)

const PORT = process.env.PORT  || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));


