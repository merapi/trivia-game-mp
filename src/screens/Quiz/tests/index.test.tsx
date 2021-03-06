import { waitForElement } from '@testing-library/react'
import App from 'App'
import React from 'react'
import { cleanup, render } from 'tests/utils'
import './mocks'

describe('Quiz screen', () => {
  afterEach(cleanup)

  test('Answer 10 questions, see the congrats, start again', async () => {
    const { getByText, getByTestId } = render(<App />)

    const start = await waitForElement(() => getByText(/^start/i))
    start.click()
    getByTestId('loader')

    for (let i = 1; i <= 10; i++) {
      // eslint-disable-next-line no-await-in-loop
      await waitForElement(() => getByText(RegExp(`^${i} of 10$`, 'i')))
      getByText(/^true$/i).click()
    }

    await waitForElement(() => getByText(/awesome/i))
    getByText(/play again/i).click()
    getByText(/^start/i).click()
  })
})
