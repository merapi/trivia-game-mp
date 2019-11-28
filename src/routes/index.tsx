import React from 'react'

const Home = React.lazy(() => import('screens/Home'))
const Quiz = React.lazy(() => import('screens/Quiz'))
const Results = React.lazy(() => import('screens/Results'))

const routes = {
  '/': () => <Home />,
  '/quiz': () => <Quiz />,
  '/results': () => <Results />,
}

export default routes
