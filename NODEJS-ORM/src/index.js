const express = require('express');
const app = express();
app.use(express.json());
const rootRouter = require('./routers/index.js');

app.use('/api', rootRouter);

app.listen(8888)