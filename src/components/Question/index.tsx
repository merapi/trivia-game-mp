import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { FlexAlign } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareQuestion = ({ className }: Props) => (
  <div className={className}>
    <Title as="h1">Entertainment: Video Games</Title>
    <Title as="h2">Unturned originally started as a Roblox game.</Title>
    <Title>1 of 10</Title>
    <Row justifyContent={FlexAlign.Center}>
      <Button>TRUE</Button>
      <Button>FALSE</Button>
    </Row>
  </div>
)

export default styled(BareQuestion)``
