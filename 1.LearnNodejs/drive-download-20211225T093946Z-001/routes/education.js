const express = require('express');
const { getAllEducations, getAddEducation, addEducation, getUpdateEducation, updateEducation, getDeleteEducation, deleteEducation } = require('../controllers/education');


const router = express.Router();

router.get('/', getAllEducations);
router.get('/addEducation', getAddEducation);
router.post('/addEducation', addEducation);
router.get('/updateEducation/:id', getUpdateEducation);
router.post('/updateEducation/:id', updateEducation);
router.get('/deleteEducation/:id', getDeleteEducation);
router.post('/deleteEducation/:id', deleteEducation);



module.exports = {
    educations: router
}