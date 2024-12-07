const { body } = require('express-validator');

exports.validatePerson = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('age')
    .isInt({ min: 0 })
    .withMessage('Age must be a positive number'),
  body('gender')
    .isIn(['Male', 'Female', 'Other'])
    .withMessage('Invalid gender'),
  body('mobileNumber')
    .matches(/^[0-9]{10}$/)
    .withMessage('Invalid mobile number')
];