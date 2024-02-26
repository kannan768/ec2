const Quiz = require("../models/quiz");

exports.add_quiz = async (req, res) => {
  try {
    const { id,subject, question, options, correctanswer } = req.body;
    console.log(req.body);
    const quiz = new Quiz({id,question, options, correctanswer, subject });
    await quiz.save();
    res.status(201).json({ message: "Questions Added succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.get_quiz_by_id = async (req, res) => {
  try {
    const quizId = req.params.id; // Assuming the ID is passed as a route parameter
console.log(quizId)
    const quiz = await Quiz.findOne({ id: quizId });

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.status(200).json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the quiz' });
  }
};


exports.get_quiz = async (req, res) => {
  try {
    const skill = await Quiz.find();
    console.log(skill);
    res.json(skill);
  } catch (err) {
    res.send("Error " + err);
  }
};

exports.edit_quiz = async (req, res) => {
  try {
    const { id, subject, question, options, correctanswer } = req.body;

    // Assuming Quiz is your Mongoose model
    const quiz = await Quiz.findOneAndUpdate(
      { id: id },
      { $set: { subject, question, options, correctanswer } },
      { new: true }
    );

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz updated successfully", quiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the quiz" });
  }
};

// exports.delete_quiz = async (req, res) => {
//   try {
//     const { subject } = req.body;
//     const query = { subject };

//     // Using the deleteOne method to remove the specified document
//     const result = await Quiz.deleteOne(query);

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: 'Questions not found' });
//     }

//     res.status(200).json({ message: 'Questions deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting questions' });
//   }
// };

exports.get_subjects = async (req, res) => {
  try {
    const subjects = await Quiz.find().distinct('subject');
    console.log(subjects);
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: "Error " + err.message });
  }
};

exports.get_question = async (req, res) => {
  try {
    const question = await Quiz.find().distinct('question');
    console.log(question);
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Error " + err.message });
  }
};

exports.get_question_bysubject = async (req, res) => {
  try {
    const { subject } = req.query;

    if (!subject) {
      return res.status(400).json({ error: 'Subject is required in the query parameter' });
    }

    const questions = await Quiz.find({ subject }).distinct('question');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Error ' + err.message });
  }
}


exports.get_all_bysubject = async (req, res) => {
  try {
    const { subject } = req.query;

    if (!subject) {
      return res.status(400).json({ error: 'Subject is required in the query parameter' });
    }

    const questions = await Quiz.find({ subject })
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Error ' + err.message });
  }
}
