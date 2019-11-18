import React from 'react'
import Home from 'screens/Home'
import Quiz from 'screens/Quiz'
import Results from 'screens/Results'

const routes = {
  '/': () => <Home />,
  '/quiz': () => <Quiz />,
  '/results': () => <Results />,
}

export default routes
