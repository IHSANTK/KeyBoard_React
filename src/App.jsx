import { useState } from 'react'
 
import Keyboard from './Keyboard'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Keyboard />
    </>
  )
}

export default App
