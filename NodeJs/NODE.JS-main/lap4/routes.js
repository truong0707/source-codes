// routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to restfull !!!',
    });
});
// Import user controller
var usersController = require('./usersController');
// User routes
router.route('/users')
    .get(usersController.index)
    .post(usersController.new);
router.route('/users/:user_id')
    .get(usersController.view)
    .patch(usersController.update)
    .put(usersController.update)
    .delete(usersController.delete);
// Export API routes
module.exports = router;