import Content from 'components/Content'
import GlobalStyle from 'design/GlobalStyle'
import { useRoutes } from 'hookrouter'
import React from 'react'
import routes from 'routes'
import NotFound from 'screens/NotFound'

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  return (
    <>
      <GlobalStyle />
      <Content>{routeResult || <NotFound />}</Content>
    </>
  )
}

export default App
