import React from 'react'
import lazy from 'utils/lazyPreload'

const Home = lazy(() => import('screens/Home'))
export const Quiz = lazy(() => import('screens/Quiz'))
export const Results = lazy(() => import('screens/Results'))

const routes = {
  '/': () => <Home />,
  '/quiz': () => <Quiz />,
  '/results': () => <Results />,
}

export default routes
