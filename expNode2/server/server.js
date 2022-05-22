require("dotenv").config(); // sử dụng biến môi trường
const express = require('express') // use express
const mongoose = require('mongoose'); // use mongoose




// function Kết nối mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ijdmi.mongodb.net/Truongphanone12?retryWrites=true&w=majority`, {
            useNewUrlParser: true, // cú pháp phân tích cú pháp chuỗi URL của mongoose
            useUnifiedTopology: true, // cú pháp loại bỏ hỗ trợ cho  của mongoose số tùy chọn trong mongoose
        });
        console.log("connect mongoose DB thành công!")
    } catch (error) {
        console.error("lỗi kết nối DB:" + error.message);
        process.exit(1) // báo lỗi 
    }
}
connectDB()




const app = express(); // tạo biến gắn giá trị express đã import phía trên
const port = 5000; // khai báo port

// Chạy ví dụ đầu tiên:
app.get('/', (req, res) => {
    res.send('hello word')
})

// Lắng nghe port
app.listen(port, () => {
    console.log(`Đây là ví dụ lắng nge port ${port}`)
})


 