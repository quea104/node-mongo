const express = require('express');
const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('응답 전달'); // 한 번만 실행 가능
});

app.get('/hello', (req, res) => {
    res.send('HELLO');
});

app.get('/employees', (req, res) => {
    res.json('View total employees');

});

app.get('/employees/:empId', (req, res) => {
    res.json('View detail information of one employee');

});

app.post('/employees', (req, res) => {
    res.json('Apply employee');
});

app.put('/employees', (req, res) => {
    res.json('Modify employee');
});

app.delete('/employees', (req, res) => {
    res.json('Delete employee')
});

app.listen(8080, () => {
    console.log('server ready on port 8080');
});