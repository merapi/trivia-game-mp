import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FlexDirection, FontSize, Spacing } from 'design'
import React from 'react'
import { useSelector } from 'react-redux'
import * as quizSelectors from 'store/quiz/selectors'
import styled from 'styled-components'
import { CorrectIcon, Questions, WrongIcon } from './elements'

interface Props {
  className?: string
}

const BareResults = ({ className }: Props) => {
  const answers = useSelector(quizSelectors.answers)
  const questions = useSelector(quizSelectors.questions)
  const questionsCount = useSelector(quizSelectors.questionsCount)
  const score = useSelector(quizSelectors.score)

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      className={className}
    >
      <Title fontSize={FontSize.Big} as="h1">
        You scored
      </Title>
      <Title as="h1">
        {score}/{questionsCount}
      </Title>
      {score > 0 && score === questionsCount ? (
        <Title fontSize={FontSize.Big} color={Color.Winner}>
          You are awesome!
        </Title>
      ) : null}

      <Questions>
        {answers.map((answer, index) => {
          const question = questions[index]
          const isCorrect = answer === question.correct_answer

          return (
            <Row
              // We can index here
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              alignItems={FlexAlign.Center}
              marginBottom={Spacing.Base}
            >
              {isCorrect ? <CorrectIcon /> : <WrongIcon />}
              <Title
                fontSize={[FontSize.Base, FontSize.Bigger]}
                marginLeft={Spacing.Base}
                marginBottom={Spacing.None}
              >
                {question.question}
              </Title>
            </Row>
          )
        })}
      </Questions>

      <Button href="/" pulse backgroundColor={Color.Primary}>
        Play again?
      </Button>
    </Row>
  )
}

export default styled(BareResults)``
