const express = require('express')
const app = express()
const router= express.Router()
const cors = require('cors')
const https = require("http")
const bodyParser = require("body-parser")
const port = 5000
var table=null
var cart=null
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
  database : 'dbms'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

connection.connect(function(err) {
    connection.query("SELECT * FROM product", function (err, result, fields) {
      if (err) throw err;
      table=result
      console.log(result);
    });
});  

app.get('/', (req, res) => {
  res.send(table)
})
app.get('/cart', (req, res) => {
  connection.connect(function(err) {
    connection.query("SELECT * FROM cart WHERE CartID='1003'", function (err, result) {
      if (err) throw err;
      cart=result
      console.log(result);
      res.send(cart)
    }); 
});  
  
})

function sqlQuery(q){
  connection.connect(function(err) {
    connection.query(q, function (err, result) {
      if (err) throw err;
      console.log(result);
      console.log('Updated');
    });
});  
}

app.post('/post', (req, res)=> {
  console.log('Got body:', req.body.query)
  res.sendStatus(200);
  sqlQuery(req.body.query)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})