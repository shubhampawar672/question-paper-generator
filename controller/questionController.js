const questionService = require('../service/questionService');

class QuestionController {
  async getQuestions(req, res) {
    const questions = await questionService.getQuestions();
    res.json(questions);
  }

  async uploadQuestions(req, res) {
    const newQuestions = req.body;
    const insertedQuestions = await questionService.uploadQuestions(newQuestions);
    res.json(insertedQuestions);
  }
  async generateQuestionPaper(req, res) {
    const { totalMarks, difficultyDistribution } = req.body;
    const questionPaper = await questionService.generateQuestionPaper(totalMarks, difficultyDistribution);
    res.json(questionPaper);
  }
}

module.exports = new QuestionController();
