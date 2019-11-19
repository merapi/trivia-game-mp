import { Question, QuestionDifficulty, QuestionType } from 'types'

// Action consts
export enum QuizActionsConsts {
  NEW_GAME = 'NEW_GAME',
  SET_QUESTIONS = 'SET_QUESTIONS',
  GIVE_ANSWER = 'GIVE_ANSWER',
}

// Action types
export interface NewGame {
  type: QuizActionsConsts.NEW_GAME
  numberOfQuestions: number,
  questionDifficulty: QuestionDifficulty
  questionType: QuestionType
}

export interface SetQuestions {
  type: QuizActionsConsts.SET_QUESTIONS
  questions: Question[]
}

export interface GiveAnswer {
  type: QuizActionsConsts.GIVE_ANSWER
  answer: string
}

export type QuizActions = NewGame | SetQuestions | GiveAnswer

// Data types
// Question should be here?

// State type
export interface QuizState {
  readonly questions: Question[],
  readonly answers: string[],
}
