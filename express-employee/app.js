const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const logger = require('./middlewares/logger');
const connectToMongo = require('./dbutils/connect');

const employeeRouter = require('./routes/employeeRouter');
const articleRouter = require('./routes/articleRouter');

// DB 접속
connectToMongo();

app.use(bodyParser.json());
app.use(logger);

app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/article/', articleRouter);

// 경로가 일치한게 없으면 아래 실행 - 404 에러 처리
app.use((req, res, next) => {
    // res.sendStatus(statusCode): Sets the response HTTP status code to statusCode and sends the registered status message as the text response body
    // res.status(statusCode): Sets the HTTP status for the response
    res.status(404).send('일치하는 경로가 없습니다.');
});


app.listen(8080, () => {
    console.log('server ready on port 8080');
});