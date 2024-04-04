const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.get('/', (req, res) => {
    res.sendFile("./views/home.html", { root: __dirname })
})



mongoose
  .connect(
    "mongodb://farhamostafa657:uw2CDclwWDowOnuD@ac-ocgurmf-shard-00-00.b8y3wya.mongodb.net:27017,ac-ocgurmf-shard-00-01.b8y3wya.mongodb.net:27017,ac-ocgurmf-shard-00-02.b8y3wya.mongodb.net:27017/?ssl=true&replicaSet=atlas-qm01gi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster")
.then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
    })
 })
.catch((err) => {console.log(err) });
