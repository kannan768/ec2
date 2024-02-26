// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const quizcontroller=require('../controllers/quizcontroller')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getquiz',quizcontroller.get_quiz)
router.post('/postquiz',quizcontroller.add_quiz)
router.put('/editquiz',quizcontroller.edit_quiz)
//router.delete('/deletequiz',quizcontroller.delete_quiz)
router.get('/getsubject',quizcontroller.get_subjects)
router.get('/getquestion',quizcontroller.get_question)
router.get('/getquestionbysubject',quizcontroller.get_question_bysubject)
router.get('/getallbysubject',quizcontroller.get_all_bysubject)
router.get('/getbyid',quizcontroller.get_quiz_by_id)
module.exports = router;
