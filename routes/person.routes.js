const express = require('express');
const router = express.Router();
const personController = require('../controllers/person.controller');
const { validatePerson } = require('../validators/person.validator');
const validateRequest = require('../middleware/validate');

router.get('/', personController.getAllPeople);
router.get('/:id', personController.getPerson);
router.post('/', validatePerson, validateRequest, personController.createPerson);
router.put('/:id', validatePerson, validateRequest, personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;