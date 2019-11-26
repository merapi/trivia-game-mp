import BooleanQuestion from 'components/BooleanQuestion'
import Button from 'components/Button'
import Loader from 'components/Loader'
import Row from 'components/Row'
import Title from 'components/Title'
import { Align, FlexAlign, FlexDirection, FontSize, Spacing } from 'design'
import React, { useCallback, useEffect } from 'react'
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

  const onAnswer = useCallback(
    answer => {
      dispatch(quizActions.giveAnswer(answer))
    },
    [dispatch],
  )

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      className={className}
      textAlign={Align.Center}
    >
      {currentQuestion ? (
        <>
          <BooleanQuestion
            category={currentQuestion.category}
            question={currentQuestion.question}
            onAnswer={onAnswer}
          />
          <Title
            marginTop={Spacing.Large}
            fontSize={[FontSize.Base, FontSize.Bigger]}
          >
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

export default styled(BareQuiz)`
  max-width: 680px;
`
