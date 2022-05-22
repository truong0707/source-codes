const mongoose = require("mongoose"); // use mongoose
const Schema = mongoose.Schema; // Khai báo sử dụng bảng Schema trong mongose

// Tạo bảng
const FoodSchema = Schema({
    img: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        require: true,
        trim: true, // no space
        max: 30,
    },
    des: {
        type: String,
    },
    quality: {
        type: Number,
        require: true,
        trim: true,
    },
    resources: {
        type: String,
        require: true,
    },
    vote: {
        type: String,
    }
});

module.exports = mongoose.model('food', FoodSchema) // export để sử dụng với tên bảng là food