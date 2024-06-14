import { useState } from 'react'
// import { Button } from '@chakra-ui/react'
import './App.css'
import Nav from './componants/Nav'
import Hero from './componants/Hero'
import Footer from './componants/Footer'
import AiFind from './componants/body/AiFind'
// import Dynamic from './componants/body/Dynamic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <AiFind />
      <Footer />
    </>
  )
}

export default App
