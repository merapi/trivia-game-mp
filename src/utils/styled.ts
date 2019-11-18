/* eslint-disable prefer-destructuring */
import { BREAKPOINTS } from 'config/consts'

const breakpoints = BREAKPOINTS

const parseValue = (value: string | number, property?: string) => {
  if (typeof value === 'string') {
    return value
  }
  return `${value}px`
}

const parseProperty = (property: string, value: string | number) => {
  const parsedValue = parseValue(value, property)
  return `${property}: ${parsedValue};`
}

export const parseStyle = (property: string, value: any | any[], defaultValue: any | any[]) => {
  if (Array.isArray(value)) {
    return value.reduce((acc, v, i) => {
      if (i === 0) return acc + parseProperty(property, v)
      const breakpoint = breakpoints[i - 1]
      return (
        `${acc
        }
@media (min-width: ${breakpoint}px) {
  ${parseProperty(property, v)}
}
        `
      )
    }, '')
  } if(value !== undefined) {
    return parseProperty(property, value)
  }
  return parseProperty(property, defaultValue)
}

const camelCased = (str: string) =>
  str.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase()
  })

export const styledProperty = (property: string | string[], defaultValue?: any) => (
  props: any,
) => {
  let propertyKey: string
  let propertyName: string

  if (Array.isArray(property)) {
    propertyKey = property[0]
    propertyName = property[1]
  } else {
    propertyKey = property
    propertyName = property
  }
  const camelCaseProperty = camelCased(propertyKey)
  if (props[camelCaseProperty] !== undefined || defaultValue) {
    return parseStyle(propertyName, props[camelCaseProperty], defaultValue)
  }
  return ``
}
