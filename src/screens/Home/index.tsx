import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FlexDirection } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareHome = ({ className }: Props) => (
  <Row
    direction={FlexDirection.Column}
    alignItems={FlexAlign.Center}
    className={className}
  >
    <Title as="h1">Welcome to the Trivia Challenge!</Title>
    <Title as="h2">
      You will be presented with 10 True or False questions.
    </Title>
    <Title as="h2">Can you score 100%?</Title>
    <Button backgroundColor={Color.Primary}>Start</Button>
  </Row>
)

export default styled(BareHome)``
