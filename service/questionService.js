
const Question = require('../model/questionModel');


class QuestionService {
  async getQuestions() {
    return await Question.find();
  }

  //add questions
  async uploadQuestions(newQuestions) {
    const insertedQuestions = await Question.insertMany(newQuestions);
    return insertedQuestions;
  }

  //genrate question paper
  async generateQuestionPaper(totalMarks, difficultyDistribution) {
    try {
      const questionPaper = [];
      const difficulties = difficultyDistribution.map(entry => entry.difficulty);

      for (const difficulty of difficulties) {
        
        const marks = this.getMarks(difficulty);
        const difficultyEntry = difficultyDistribution.find(entry => entry.difficulty === difficulty);
        const count = Math.round((difficultyEntry.percentage / 100) * totalMarks / marks);


        const selectedQuestions = await this.getRandomQuestions(difficulty, count);
       
        // Add questions to the paper
        for (const question of selectedQuestions) {
          const totalMarksSoFar = questionPaper.reduce((acc, q) => acc + q.marks, 0);
          if (totalMarksSoFar + marks <= totalMarks) {
            questionPaper.push({ ...question.toObject(), marks });
          }
          
        }
      }

      return questionPaper;
    } catch (err) {
      throw new Error(err.message);
    }
  }


  async getRandomQuestions(difficulty, count) {
  const allQuestions = await Question.find({ difficulty });
    return allQuestions.slice(0, count);
  }


  getMarks(difficulty) {
    
    switch (difficulty) {
      case 'Hard':
        return 15;
      case 'Medium':
        return 10;
      case 'Easy':
        return 5;
      default:
        return 0;
    }
  }
}

module.exports = new QuestionService();