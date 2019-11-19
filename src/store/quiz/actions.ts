import { QuestionDifficulty, QuestionType } from 'types'
import { QuizActions, QuizActionsConsts } from './types'

export const newGame = (numberOfQuestions: number, questionDifficulty: QuestionDifficulty, questionType: QuestionType): QuizActions => ({
  type: QuizActionsConsts.NEW_GAME,
  numberOfQuestions,
  questionDifficulty,
  questionType,
})
