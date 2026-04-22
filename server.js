var express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    message = "Server running"
    res.send(message)
})

app.get('/test', (req, res) => {
    let data = "test route"
    console.log(data)
    return res.send("OK")
})

app.listen(PORT, () => {
    console.log("Server started")   
})