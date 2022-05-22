const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 10,
      trim: true,
      uppercase: true
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
    },
    gender: {
      type: String,
      enum: ['None', 'Male', 'Female'],
      default: 'None'
    },
    dob: {
      type: Date,
      min: '1930-01-01',
      max: '2015-12-31',
      default: '2003-12-31'
    },
    born: {
      type: String,
      default: 'Đà Nẵng'
    },
    scholarship: {
      type: Number,
      min: 0,
      max: 16,
      default: 0
    },
    classId: {
      type: String,
      minlength: 8,
      maxlength: 64,
    }
  },
  {
    timestamps: true,
  }
)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student