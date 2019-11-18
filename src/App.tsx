import GlobalStyle from 'design/GlobalStyle'
import React from 'react'
import Home from 'screens/Home'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
