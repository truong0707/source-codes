const mongoose = require('mongoose');


// conect mongo
async function connect() {

    try{
        await mongoose.connect('mongodb://localhost:27017/truong_education_dev', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('kết nối mongoDB thành công !!!')
    } catch (error){
        console.log('Connect mongoDB thất bại !')

    }
}



module.exports = { connect };