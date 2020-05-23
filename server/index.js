// Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');
const { mongoConnect } = require('./services/database');
const chalk = require('chalk');

//DB Setup



//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
// const port = process.env.PORT || 3090;
// const server = http.createServer(app)
// server.listen(port);
// console.log(`Server listening on....${port}`)
const port = 3090
mongoConnect(()=>{
    app.listen(port, () => {
        console.log(chalk.green.bold(`On Port:${port}`))
        console.log(chalk.green.bold.underline(`Running on http://localhost:${port}`))
    });
})