const { GiaoDuc, validate} = require('../models/education');

const getAllEducations = async (req, res, next) => {
    const list = await GiaoDuc.find().exec();
    res.render('./Education/EducationList', {
        educations: list
    });
}

const getAddEducation = (req, res, next) => {
    res.render('./Education/addEducation');
}

const addEducation = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    const data = req.body;
    let giaoduc = await new GiaoDuc({
        image: data.image,
        name: data.name,
        author: data.author,
        newPrice: data.newPrice,
        oldPrice: data.oldPrice,
        content: data.content,
    });
    giaoduc = await giaoduc.save();
    res.redirect('/educations');
}

const getUpdateEducation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onegiaoduc = await GiaoDuc.findById(id).exec();
        res.render('./Education/updateEducation', {
            giaoduc: onegiaoduc
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEducation = async(req, res, next) => {
    const {error} = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);
    const id = req.params.id;
    const data = req.body;
    let giaoduc = await GiaoDuc.findByIdAndUpdate(id, {
        image: data.image,
        name: data.name,
        author: data.author,
        newPrice: data.newPrice,
        oldPrice: data.oldPrice,
        content: data.content,
    }, {new: true});
    if(!giaoduc) return res.status(404).send('Sách giáo dục với id đã cho không tìm thấy');

    res.redirect('/educations');
}

const getDeleteEducation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const onegiaoduc = await GiaoDuc.findById(id).exec();
        res.render('./Education/deleteEducation', {
            giaoduc: onegiaoduc
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEducation = async (req, res, next) => {
    try {
        const id = req.params.id;
        const giaoduc = await GiaoDuc.findByIdAndRemove(id);
        if(!giaoduc) return res.status(404).send('Sách giáo dục với id đã cho không tìm thấy');
        res.redirect('/educations');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllEducations,
    getAddEducation,
    addEducation,
    getUpdateEducation,
    updateEducation,
    getDeleteEducation,
    deleteEducation
}