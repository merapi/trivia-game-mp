import { Align, FlexAlign, FlexDirection, Spacing } from 'design'
import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'
import { styledProperty } from 'utils/styled'

interface Props {
  className?: string
  children: ReactNode
  display?: string | string[]
  padding?: Spacing | string
  marginTop?: Spacing
  marginBottom?: Spacing
  direction?: FlexDirection | undefined
  alignItems?: FlexAlign | undefined
  justifyContent?: FlexAlign | undefined
  textAlign?: Align
}

const BareRow = ({ className, children }: Props, ref: any) => (
  <div ref={ref} className={className}>
    {children}
  </div>
)

export default styled(forwardRef(BareRow))`
  ${styledProperty('text-align')}
  ${styledProperty('display', 'flex')}
  ${styledProperty('margin-bottom')}
  ${styledProperty('margin-top')}
  ${styledProperty('padding')}
  ${styledProperty('flex-direction')}
  ${styledProperty('align-items')}
  ${styledProperty('justify-content')}
  ${styledProperty(['direction', 'flex-direction'])}
`
