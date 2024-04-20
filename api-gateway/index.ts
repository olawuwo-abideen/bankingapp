const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/account', proxy('http://localhost:3001'))
app.use('/investment', proxy('http://localhost:3002'))
app.use('/lifestyle', proxy('http://localhost:3003'))
app.use('/notification', proxy('http://localhost:3004'))
app.use('/payment', proxy('http://localhost:3005'))
app.use('/support', proxy('http://localhost:3006'))
app.use('/transaction', proxy('http://localhost:3007'))
app.use('/user', proxy('http://localhost:3008'))

app.listen(3000, () => {
    console.log('Gateway is Listening on Port 3000')
})
