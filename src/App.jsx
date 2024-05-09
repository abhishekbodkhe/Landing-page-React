import { useState } from 'react'
import Header from './components/Header'
import Faq from './components/Faq'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Carousel />
      <Faq />
    </>
  )
}

export default App
