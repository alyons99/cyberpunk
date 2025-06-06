import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item_Card from './Item_Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Item_Card/>
     </>
  )
}

export default App
