import Button from 'components/Button'
import Title from 'components/Title'
import { FontSize, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareNotFound = ({ className }: Props) => (
  <div className={className}>
    <Title fontSize={FontSize.Big} marginBottom={Spacing.Large}>
      Page not found
    </Title>
    <Button href="/">Go to Homepage</Button>
  </div>
)

export default styled(BareNotFound)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
