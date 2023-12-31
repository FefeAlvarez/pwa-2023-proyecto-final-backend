const { check } = require('express-validator');
const validateResults = require('../utils/validationHandler');

const createProductValidation = [
  check('title').exists().notEmpty(),
  check('price').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('image').exists().notEmpty(),
  check('category').exists().notEmpty(),
 

  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const updateProductValidation = [
  check('id').exists().notEmpty(),
  check('title').exists().notEmpty(),
  check('price').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('image').exists().notEmpty(),
  check('category').exists().notEmpty(),
  

  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

const deleteProductValidation = [check('id').exists().notEmpty()];
module.exports = {
  createProductValidation,
  updateProductValidation,
  deleteProductValidation
};
