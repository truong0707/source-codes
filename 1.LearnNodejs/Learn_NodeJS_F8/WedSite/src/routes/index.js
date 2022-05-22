const newsRouter = require('./news.js')
const siteRouter = require('./site.js')

function route(app) {

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // news page
    app.use('/news', newsRouter);

    // home
    app.use('/', siteRouter);




}

module.exports = route;