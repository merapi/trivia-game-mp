import Button from 'components/Button'
import Title from 'components/Title'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareResults = ({ className }: Props) => (
  <div className={className}>
    <Title as="h1">You scored</Title>
    <Title as="h1">3/10</Title>

    <Button>Play again?</Button>
  </div>
)

export default styled(BareResults)``
