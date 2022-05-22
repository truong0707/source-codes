const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb');
const Student = require('../models/student.model')


/* GET students listing. */
router
  // Get student
  .get('/', (req, res, next) => {
    Student
      .find({})
      .exec((err, students) => {
        res.render('university/students', {
          students: students
        })
      })
  })

  // find student
  .get("/find", (req, res, next) => {
    res.render("university/find-student")
  })

  .post('/find', (req, res, next) => {
    const id = ObjectId(req.body.studentId)
    Student.findById(id, (err, student) => {
      if (err) throw err
      res.render("university/student", { student: student})
    })
  })

  // Add student
  .get('/add', (req, res, next) => {
    res.render('university/add-student')
  })

  .post('/add', (req, res, next) => {
    var student = new Student()
    student.code = req.body.student_code
    student.name = req.body.student_name
    student.gender = req.body.student_gender
    student.dob = req.body.student_dob
    student.born = req.body.student_born
    student.scholarship = req.body.student_scholarship

    student.save( err => {
        if (err) throw err
        res.redirect('/student')
    })
  })

  // Update student
  .get("/id/:studentId", (req, res) => {
    const id = ObjectId(req.params.studentId)
    Student.findById(id, (err, student) => {
      if (err) throw err
      res.render("university/student", { student: student})
    })
  })
  .post("/id/:studentId", (req, res) => {
    const id = ObjectId(req.params.studentId)
    Student.findByIdAndUpdate({_id: id}, {
      code: req.body.student_code,
      name: req.body.student_name,
      gender: req.body.student_gender,
      dob: req.body.student_dob,
      born: req.body.student_born,
      scholarship: req.body.student_scholarship,
    }, (err) => {
      if (err) throw err
      res.redirect('/student')
    })
  })

  // delete student

module.exports = router
