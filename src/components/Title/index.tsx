import { Align, FlexAlign, FontSize, Spacing } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { styledProperty } from 'utils/styled'

interface Props {
  className?: string
  children: ReactNode
  color?: string
  fontSize?: FontSize | FontSize[]
  marginTop?: Spacing
  marginBottom?: Spacing
  marginLeft?: Spacing
  textAlign?: Align
  justifyContent?: FlexAlign
}

const BareTitle = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
)

export default styled(BareTitle)<Props>`
  font-weight: bold;
  line-height: 140%;
  ${styledProperty('text-align')}
  ${styledProperty('font-size', FontSize.Bigger)}
  ${styledProperty('color')}
  ${styledProperty('margin-top')}
  ${styledProperty('margin-left')}
  ${styledProperty('margin-bottom', Spacing.Base)}
`
