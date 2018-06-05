var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');

var db = mongojs('sudokupuzzle');
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path.  
// If you put index.html in public, index.html will start
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
//   res.send('Hello!');
// });

// Global variable
app.use(function(req, res, next) {
  res.locals.errors = null;
  next();
})

users = []

app.get('/users', function(req, res) {
  db.users.find(function(err, docs) {
    users = docs;
    res.render('index', {
      users: users
    });  
  })
});

app.post('/users/add', function(req, res) {
  if(validate()) {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    }

    db.users.insert(newUser, function(err, result) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/users');
      }
    });
  } else {

  }
});

app.delete('/users/delete/:id', function(req, res) {
  console.log(req.params.id);
  db.users.remove({ _id: mongojs.ObjectId(req.params.id)}, function(err, result) {
    if (err) {
      console.log(err);
    } 
    res.redirect('/users');
  })
});

app.listen(3000, function() {
  console.log("Server Started on port 3000...");
});

function validate() {
  return true;
}