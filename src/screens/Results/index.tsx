import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FlexDirection, FontSize, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'
import { CorrectIcon, Questions, WrongIcon } from './elements'

interface Props {
  className?: string
}

const BareResults = ({ className }: Props) => (
  <Row
    direction={FlexDirection.Column}
    alignItems={FlexAlign.Center}
    className={className}
  >
    <Title fontSize={FontSize.Big} as="h1">
      You scored
    </Title>
    <Title as="h1">1/10</Title>

    <Questions>
      <Row alignItems={FlexAlign.Center} marginBottom={Spacing.Base}>
        <CorrectIcon />
        <Title marginLeft={Spacing.Base} marginBottom={Spacing.None}>
          Question... Question... Question... Question... Question...
          Question... Question... Question... Question... Question...
          Question... Question... Question... Question... Question...
        </Title>
      </Row>
      <Row>
        <WrongIcon />
        <Title marginLeft={Spacing.Base}>
          Question... Question... Question... Question... Question...
          Question... Question... Question... Question... Question...
        </Title>
      </Row>
    </Questions>

    <Button href="/" pulse backgroundColor={Color.Primary}>
      Play again?
    </Button>
  </Row>
)

export default styled(BareResults)``
