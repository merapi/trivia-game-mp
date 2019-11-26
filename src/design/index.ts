export enum Spacing {
  None = 0,
  Tiny = 4,
  Small = 8,
  Base = 16,
  Medium = 24,
  Large = 32,
  Huge = 64,
}

export enum Size {
  CardGap = Spacing.Large,
  RoundedCorner = Spacing.Tiny,
}

export enum FontSize {
  Small = 12,
  Smaller = 14,
  Base = 16,
  Bigger = 20,
  Big = 26,
}

export enum Color {
  Correct = '#8bc322',
  Wrong = '#e3020a',
  Primary = '#1688FA',
  Background = '#FAFAFA',
  AlmostBlack = '#222',
  Winner = '#AB8D3F',
}

export enum Align {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
// TODO: We should merge them? PROS: easier to remember, just 'Align', CONS: flex-start is not valid for text
export enum FlexAlign {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
}
export enum FlexDirection {
  Row = 'row',
  Column = 'column',
}
