/* eslint-disable camelcase */
export enum QuestionDifficulty { Easy = 'easy', Medium = 'medium', Hard = 'hard' }
export enum QuestionType { Boolean = 'boolean' , Multiple = 'multiple' }

export interface Question {
  category: string
  type: QuestionType
  difficulty: QuestionDifficulty
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
