import express from 'express';
const router = express.Router();
import homeController from '../controller/homeController';
import userController from '../controller/userController';
const initWebRoute = (app) => {
    router.get('/add', homeController.addProduct);
    router.get('/admin', homeController.getHomepage);
    router.get('/deleteProduct/:id', homeController.deleteProduct);
    router.get('/deleteCart/:id', homeController.deleteCart);
    router.get('/deleteCartHome/:id', homeController.deleteCartHome);
    router.get('/cart', homeController.cart);
    router.get('/home', homeController.getHomepageUser);
    router.get('/register', homeController.register);
    // router.get('/login', homeController.login);

    return app.use('/', router);
}

export default initWebRoute