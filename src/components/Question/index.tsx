import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FlexDirection, FontSize } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  category: string
  question: string
}

const BareQuestion = ({ className, category, question }: Props) => (
  <Row
    direction={FlexDirection.Column}
    alignItems={FlexAlign.Center}
    className={className}
  >
    <Title fontSize={FontSize.Big} as="h1">
      {category}
    </Title>
    <Title as="h2">{question}</Title>
    <Row justifyContent={FlexAlign.Center}>
      <Button pulse backgroundColor={Color.Correct}>
        TRUE
      </Button>
      <Button pulse backgroundColor={Color.Wrong}>
        FALSE
      </Button>
    </Row>
  </Row>
)

export default styled(BareQuestion)``
