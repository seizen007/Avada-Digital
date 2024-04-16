import { useState } from 'react'
import './App.css'
import home from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <home.Home/>
    </>
  )
}

export default App
