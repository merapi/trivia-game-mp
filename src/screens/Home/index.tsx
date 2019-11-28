import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import {
  Align,
  Color,
  FlexAlign,
  FlexDirection,
  FontSize,
  Spacing,
} from 'design'
import React from 'react'
import { Quiz } from 'routes'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareHome = ({ className }: Props) => {
  const onMouseEnterStart = () => {
    Quiz.preload()
  }

  return (
    <Row
      direction={FlexDirection.Column}
      alignItems={FlexAlign.Center}
      justifyContent={FlexAlign.Center}
      className={className}
      textAlign={Align.Center}
    >
      <Title fontSize={FontSize.Big} marginBottom={Spacing.Huge} as="h1">
        Welcome to the Trivia Challenge!
      </Title>
      <Title as="h2">
        You will be presented with 10{' '}
        <Title color={Color.Correct} as="span">
          True
        </Title>{' '}
        or{' '}
        <Title color={Color.Wrong} as="span">
          False
        </Title>{' '}
        questions.
      </Title>
      <Title as="h2" marginBottom={Spacing.Large}>
        Can you score{' '}
        <Title color={Color.Winner} as="span">
          100%
        </Title>
        ?
      </Title>
      <Button
        onMouseEnter={onMouseEnterStart}
        href="/quiz"
        pulse
        backgroundColor={Color.Primary}
      >
        Start
      </Button>
    </Row>
  )
}

export default styled(BareHome)``
