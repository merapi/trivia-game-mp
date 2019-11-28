import { Question, QuestionDifficulty, QuestionType } from 'types'

export const mockQuestion: Question = {
  question: 'Test question, correct answer is True',
  category: 'Test category',
  difficulty: QuestionDifficulty.Hard,
  type: QuestionType.Boolean,
  correct_answer: 'True',
  incorrect_answers: ['False'],
}
