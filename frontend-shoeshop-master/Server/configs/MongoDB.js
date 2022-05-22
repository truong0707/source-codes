const mongoose = require('mongoose');

/// kết nối mongoDB bằng mongose
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.q00mk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1); // mã lỗi
    }
}

module.exports = connectDB;