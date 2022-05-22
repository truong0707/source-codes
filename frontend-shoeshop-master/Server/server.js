const express = require('express');
const products = require('./data/Products.js');
const dotenv  = require('dotenv');
const connectDB = require('./configs/MongoDB.js');
const ImportData  = require('./DataImport.js');
const productRoute = require('./Routes/ProductRoutes');
const { notFound, errorHandler } = require('./Middleware/Errors.js');

dotenv.config();
connectDB()
const app = express();


// app.get("/", (req, res) => {
//     res.send("API running....");
    
// })

// // Load product from server
// app.get("/api/products", (req, res) => {
//     res.json(products);
// })

// // single product from server
// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product)
// });

// APi
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);


// Error handle
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port: ${PORT}`))