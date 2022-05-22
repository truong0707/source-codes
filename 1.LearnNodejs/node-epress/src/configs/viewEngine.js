import express from 'express';
import { path } from 'app-root-path';
console.log(path)
const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', 'views')
    app.use(express.static(path + '/public'))

    // app.set('view engine', 'ejs');
    // app.set('views', './views')
    // app.use(express.static(__dirname + '/public'))

    // app.use(express.static("./src/public"));
    // app.set("view engine", "ejs");
    // app.set("views", "./src/views")

}
export default configViewEngine