const { Router } = require('express');
const router = Router();
const studentController = require('../controllers/student.controller');

router.route('/')
    .post(studentController.addStudent)
    .get(studentController.getStudents);


router.route('/:studentId')
    .get(studentController.getStudent)
    .delete(studentController.deleteStudent)
    .put(studentController.updateStudent);   

module.exports = router;    