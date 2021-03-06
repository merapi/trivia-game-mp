import { Color, FontSize, Size, Spacing } from 'design'
import { navigate } from 'hookrouter'
import React, { MouseEvent, ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { styledProperty } from 'utils/styled'

interface Props {
  href?: string
  pulse?: boolean
  className?: string
  color?: Color
  marginTop?: Spacing | Spacing[]
  marginLeft?: Spacing | Spacing[]
  backgroundColor?: Color
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}

const BareButton = ({
  className,
  children,
  onClick,
  onMouseEnter,
  href,
}: Props) => {
  let onClickHandler = onClick
  if (href) {
    onClickHandler = () => navigate(href)
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClickHandler}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </button>
  )
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`

export default styled(BareButton)`
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  ${styledProperty('margin-left')}
  ${styledProperty('margin-top')}
  ${styledProperty('color', '#fff')}
  ${styledProperty('background-color', '#999')}
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${Size.RoundedCorner}px;
  padding: ${Spacing.Base}px ${Spacing.Large}px;
  /* text-transform: uppercase; */
  font-size: ${FontSize.Base}px;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;
  &:hover {
    background: darken(#c06c84, 10%);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
  }

  ${({ pulse }) =>
    pulse
      ? css`
          &:before,
          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            opacity: 0;
            margin: auto;
          }
          &:before {
            animation: ${pulseAnimation} 1.5s infinite linear;
          }
          &:after {
            animation: ${pulseAnimation} 2s 0.4s infinite linear;
          }
          &:hover:before,
          &:hover:after {
            display: none;
          }
        `
      : ``}
`
