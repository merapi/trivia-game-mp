import Button from 'components/Button'
import Loader from 'components/Loader'
import Question from 'components/Question'
import Row from 'components/Row'
import Title from 'components/Title'
import { FlexAlign, FlexDirection, Spacing } from 'design'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as quizActions from 'store/quiz/actions'
import * as quizSelectors from 'store/quiz/selectors'
import styled from 'styled-components'
import { QuestionDifficulty, QuestionType } from 'types'

interface Props {
  className?: string
}

const BareQuiz = ({ className }: Props) => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(quizSelectors.currentQuestion)
  const questionsCount = useSelector(quizSelectors.questionsCount)
  const answersCount = useSelector(quizSelectors.answersCount)

  useEffect(() => {
    dispatch(
      quizActions.newGame(10, QuestionDifficulty.Hard, QuestionType.Boolean),
    )
  }, [dispatch])

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      className={className}
    >
      {currentQuestion ? (
        <>
          <pre>{JSON.stringify(currentQuestion, null, 2)}</pre>
          <Button href="/results">Results</Button>
          <Question
            category="Entertainment: Video Games"
            question="Question..."
          />
          <Title>
            {answersCount} of {questionsCount}
          </Title>
        </>
      ) : (
        <>
          <Loader />
          <Button marginTop={Spacing.Huge} href="/">
            Back to Homepage
          </Button>
        </>
      )}
    </Row>
  )
}

export default styled(BareQuiz)``
