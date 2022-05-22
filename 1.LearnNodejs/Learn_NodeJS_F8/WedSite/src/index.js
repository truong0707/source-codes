const express = require('express'); // import express
const morgan = require('morgan'); // import monrgan
const handlebars = require('express-handlebars'); // import handlebars
const path = require('path') // import path của thằng nodejs
const app = express() 
const port = 3000   // run wedsite ở port: 3000

const route = require('./routes/index.js')
const db = require('./config/db/index.js')



// Connect monggo db
db.connect();


app.use(express.static(path.join(__dirname, 'public'))); // ảnh (Static file)

// sử dụng middleware
app.use(express.urlencoded({
    extend: true
}
)); // TH1
app.use(express.json()); // TH2 : gửi từ code js lên


// HTTP logger
app.use(morgan('combined')) // sử dụng morgan


// cấu hình Template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs'})); // extname: '.hbs' duoi.hbs
app.set('view engine', 'hbs');


app.set('views', path.join(__dirname, 'resources/views')); // set views



// Routes initial
route(app);





app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})


// 10 7:46
// 31.29 / 33.36