const mongoose = require('mongoose');
const Joi = require('joi');

const giaoducSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }, 
    newPrice: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

const GiaoDuc = mongoose.model('GiaoDuc', giaoducSchema);

const validateGiaoDuc = (giaoduc) => {
    const schema = {
        image: Joi.string().required(),
        name: Joi.string().required(),
        author: Joi.string().required(),
        newPrice: Joi.number().required(),
        oldPrice: Joi.number().required(),
        content: Joi.string().required(),
    }

    return Joi.validate(giaoduc, schema);
}


module.exports.GiaoDuc = GiaoDuc;
module.exports.validate = validateGiaoDuc;