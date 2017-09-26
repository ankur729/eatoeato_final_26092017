

require('./routes/db.js');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var foods = require('./routes/foods');
var user_route = require('./routes/user_route');
var cook_route = require('./routes/cook_route');
var admin_route = require('./routes/admin_route');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
    gulp.src('client/pudblic/js/*.js'),
    uglify(),
    gulp.dest('dist')
  ],
    cb
  );
});


var port = 3000;

var app = express();
app.use(compression());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
// app.use(bodyParser.json()); 


app.use('/', index);
app.use('/api', tasks);
app.use('/foods', foods);
app.use('/user', user_route);
app.use('/cook', cook_route);

app.use('/admin', admin_route);

app.listen(port, function () {
  console.log('Server started on port ' + port);
});