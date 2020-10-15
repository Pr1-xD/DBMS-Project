const express = require('express')
const app = express()
const router= express.Router()
const cors = require('cors')
const https = require("http")
const bodyParser = require("body-parser")
const port = 5000
var table=null
app.use(cors())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'da'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

connection.connect(function(err) {
    connection.query("SELECT * FROM ex1", function (err, result, fields) {
      if (err) throw err;
      table=result
      console.log(result);
    });
});  

app.get('/', (req, res) => {
  res.send(table)
})

app.post('/post', (req, res)=> {
  // res.set('Content-Type', 'text/plain')
  console.log('Got body:', req.body.abc)
  res.sendStatus(200);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})