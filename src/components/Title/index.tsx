import { FlexAlign, FontSize, Spacing } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { styledProperty } from 'utils/styled'

interface Props {
  className?: string
  children: ReactNode
  color?: string
  fontSize?: FontSize | FontSize[]
  marginBottom?: Spacing
  marginLeft?: Spacing
  justifyContent?: FlexAlign | undefined
}

const BareTitle = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
)

export default styled(BareTitle)<Props>`
  font-weight: bold;
  ${styledProperty('font-size', FontSize.Bigger)}
  ${styledProperty('color')}
  ${styledProperty('margin-left')}
  ${styledProperty('margin-bottom', Spacing.Base)}
`
