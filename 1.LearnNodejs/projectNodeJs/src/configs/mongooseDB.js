// get the client
const mongoose = require('mongoose');
// create the connection to database
const connectMgDB = () => {
    mongoose.connect("mongodb+srv://tientran:eEAUKwzQrDCFzPab@cluster0.gfs2h.mongodb.net/testDataBase?retryWrites=true&w=majority",
        (err) => {
            if (err) {
                console.log("mongodb connected err:" + err)
            } else {
                console.log("mongodb connected success:")
            }
        }

    );
}


// simple query

// simple query
export default connectMgDB;

