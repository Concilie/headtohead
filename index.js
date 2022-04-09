const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const playersRouter = require('./routes/players')

app.use(bodyParser.json())

app.use('/players', playersRouter)

app.get('/test', (req, res) => {
    console.log()
})


app.listen(8014, () => console.log('Server listen on port 8014'))
