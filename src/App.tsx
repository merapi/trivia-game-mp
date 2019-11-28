import Content from 'components/Content'
import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Loader'
import Row from 'components/Row'
import { FlexAlign, Spacing } from 'design'
import GlobalStyle from 'design/GlobalStyle'
import { useRoutes } from 'hookrouter'
import React, { Suspense } from 'react'
import routes from 'routes'
import NotFound from 'screens/NotFound'

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  return (
    <>
      <GlobalStyle />
      <Content>
        <ErrorBoundary>
          <Suspense
            fallback={
              <Row padding={Spacing.Huge} justifyContent={FlexAlign.Center}>
                <Loader />
              </Row>
            }
          >
            {routeResult || <NotFound />}
          </Suspense>
        </ErrorBoundary>
      </Content>
    </>
  )
}

export default App
