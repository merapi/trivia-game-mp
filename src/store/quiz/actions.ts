import { Question, QuestionDifficulty, QuestionType } from 'types'
import { QuizActions, QuizActionsConsts } from './types'

export const newGame = (
  numberOfQuestions: number,
  questionDifficulty: QuestionDifficulty,
  questionType: QuestionType,
): QuizActions => ({
  type: QuizActionsConsts.NEW_GAME,
  numberOfQuestions,
  questionDifficulty,
  questionType,
})

export const setQuestions = (questions: Question[]): QuizActions => ({
  type: QuizActionsConsts.SET_QUESTIONS,
  questions,
})

export const giveAnswer = (answer: string): QuizActions => ({
  type: QuizActionsConsts.GIVE_ANSWER,
  answer,
})
