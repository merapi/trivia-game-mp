import Button from 'components/Button'
import Row from 'components/Row'
import Title from 'components/Title'
import { FlexAlign, FlexDirection, Spacing } from 'design'
import React, { Component } from 'react'

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error | null, info: object) {
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    const reload = () => {
      window.location.href = '/'
    }

    if (hasError) {
      return (
        <Row direction={FlexDirection.Column} alignItems={FlexAlign.Center}>
          <Title marginBottom={Spacing.Large}>Something went wrong.</Title>
          <Button onClick={reload}>Reload the app</Button>
        </Row>
      )
    }

    return children
  }
}
