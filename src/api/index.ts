import { API_URL } from 'config/consts'
import { Question, QuestionDifficulty, QuestionType } from 'types'

interface FetchOptions {
  signal?: AbortSignal
}

export enum ResponseCode {
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

export interface GetTokenResponse {
  response_code: ResponseCode
  response_message: string
  token: string
}

const questions = {
  async getToken(): Promise<GetTokenResponse> {
    return fetch(`${API_URL}/api_token.php?command=request`).then(response =>
      response.json(),
    )
  },

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
      amount,
      difficulty,
      type,
      token,
      encode: 'url3986',
    }
    const query = Object.keys(params)
      .filter(key => params[key])
      .map(key => `${key}=${params[key]}`)

    return fetch(
      `${API_URL}/api.php?${query.join('&')}`,
      options,
    ).then(response => response.json())
  },
}

export default {
  questions,
}
