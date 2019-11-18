import { ReactComponent as Correct } from 'assets/icons/correct.svg'
import { ReactComponent as Wrong } from 'assets/icons/wrong.svg'
import { Spacing } from 'design'
import styled from 'styled-components'

export const Icon = (icon: any) =>
  styled(icon)`
    flex-shrink: 0;
  `

export const CorrectIcon = Icon(Correct)
export const WrongIcon = Icon(Wrong)

export const Questions = styled.div`
  padding: ${Spacing.Large}px;
  max-width: 640px;
`
