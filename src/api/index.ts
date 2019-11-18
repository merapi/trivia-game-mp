/* eslint-disable camelcase */
import { API_URL } from 'config/consts';
import { Question, QuestionDifficulty, QuestionType } from 'types';

interface FetchOptions {
  signal?: AbortSignal
}

enum ResponseCode {
  Success,
  NoResults,
  InvalidParameter,
  TokenNotFound,
  TokenEmpty,
}

export interface FetchQuestionsResponse {
  response_code: ResponseCode
  results: Question[]
}

const questions = {
  async fetchQuestions(
    amount: number,
    difficulty: QuestionDifficulty = QuestionDifficulty.Hard,
    type: QuestionType = QuestionType.Boolean,
    token?: string,
    abortController?: AbortController,
  ): Promise<FetchQuestionsResponse> {
    const options: FetchOptions = {}
    if (abortController) {
      options.signal = abortController.signal
    }

    const params: { [key: string]: any } = {
      amount, difficulty, type, token
    }
    const query = Object.keys(params).filter(key => params[key]).map(key => `${key}=${params[key]}`)

    return fetch(
      `${API_URL}?${query.join('&')}`,
      options,
    ).then(response => response.json())
  },
}

export default {
  questions,
}
