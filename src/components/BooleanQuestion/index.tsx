import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FlexDirection, FontSize, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  category: string
  question: string
  onAnswer: (answer: string) => void
}

const BareBooleanQuestion = ({
  className,
  category,
  question,
  onAnswer,
}: Props) => {
  const onClick = (answer: string) => () => {
    onAnswer(answer)
  }

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      className={className}
    >
      <Title
        marginBottom={Spacing.Large}
        fontSize={[FontSize.Bigger, FontSize.Big]}
        as="h1"
      >
        {category}
      </Title>
      <Title
        fontSize={[FontSize.Base, FontSize.Bigger]}
        marginBottom={Spacing.Large}
        as="h2"
      >
        {question}
      </Title>
      <Row justifyContent={FlexAlign.Center}>
        <Button onClick={onClick('True')} pulse backgroundColor={Color.Correct}>
          TRUE
        </Button>
        <Button
          onClick={onClick('False')}
          pulse
          backgroundColor={Color.Wrong}
          marginLeft={Spacing.Base}
        >
          FALSE
        </Button>
      </Row>
    </Row>
  )
}

export default styled(BareBooleanQuestion)``
