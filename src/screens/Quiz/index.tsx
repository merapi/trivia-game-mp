import Api from 'api'
import Button from 'components/Button'
import Question from 'components/Question'
import Row from 'components/Row'
import Title from 'components/Title'
import { FlexAlign, FlexDirection } from 'design'
import React, { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareQuiz = ({ className }: Props) => {
  useEffect(() => {
    Api.questions.fetchQuestions(10)
  }, [])

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      className={className}
    >
      {/* <Button href="/">Quit</Button> */}
      <Button href="/results">Results</Button>
      <Question category="Entertainment: Video Games" question="Question..." />
      <Title>1 of 10</Title>
    </Row>
  )
}

export default styled(BareQuiz)``
