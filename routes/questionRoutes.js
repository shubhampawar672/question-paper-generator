const express = require('express');
const questionController = require('../controller/questionController');

const router = express.Router();

router.get('/questions', questionController.getQuestions);
router.post('/upload-questions', questionController.uploadQuestions); 
router.post('/generate-question-paper', questionController.generateQuestionPaper);

module.exports = router;
